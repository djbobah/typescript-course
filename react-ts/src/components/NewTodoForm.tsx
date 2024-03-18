import React, { useRef } from "react";

interface NewTodoFormProps {
  // value: string;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (text: string) => void;
}

const NewTodoForm = ({ handleClick }: NewTodoFormProps) => {
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
        placeholder="new todo"
        // value={value}
        // onChange={onChange}
        ref={inputRef}
      />
      <button onClick={onClick}>Add todo</button>
    </>
  );
};

export default NewTodoForm;
