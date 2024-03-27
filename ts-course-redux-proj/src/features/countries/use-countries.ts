import { useSelector } from "react-redux";
import { useEffect } from "react";

// import {  } from "../controls/controls-slice";
import { loadCountries } from "./countries-slice";
import {
  selectCountriesInfo,
  selectVisibleCountries,
} from "./countries-selectors";
import { RootState, useAppDispatch } from "store";
import { Country } from "types";
import { selectControls } from "features/controls/control-selectors";

export const useCountries = (): [
  Country[],
  ReturnType<typeof selectCountriesInfo>
] => {
  const dispatch = useAppDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector((state: RootState) =>
    selectVisibleCountries(state, controls)
  );
  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, { status, error, qty }];
};
