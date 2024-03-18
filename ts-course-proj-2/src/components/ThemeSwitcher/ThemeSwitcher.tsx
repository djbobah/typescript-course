import { ReactComponent as MoonIcon } from "../../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../assets/icon-sun.svg";

import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {}

export const ThemeSwitcher = ({}: ThemeSwitcherProps) => (
  <div className={styles.ThemeSwitcher} data-testid="ThemeSwitcher">
    ThemeSwitcher Component
  </div>
);
