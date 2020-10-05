import React from "react";
import { Wrapper, Input, Label } from "./styles";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const InputComponent: React.FC<IProps> = ({
  placeholder,
  required,
  ...rest
}) => {
  return (
    <Wrapper>
      <Input {...rest} />
      <Label>
        {placeholder}
        {required ? <span className="ml-2 text-red-600">*</span> : null}
      </Label>
    </Wrapper>
  );
};

export default InputComponent;
