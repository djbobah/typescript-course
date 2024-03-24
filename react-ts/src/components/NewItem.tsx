import React, { useRef } from "react";

interface NewItemProps {
  placeholder: string;
  // value: string;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (text: string) => void;
}

const NewItem = ({ handleClick, placeholder }: NewItemProps) => {
  // value, onChange,
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        // value={value}
        // onChange={onChange}
        ref={inputRef}
      />
      <button onClick={onClick}>Add todo</button>
    </>
  );
};

export default NewItem;
