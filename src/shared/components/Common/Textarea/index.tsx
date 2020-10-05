import React from "react";
import { Wrapper, Input, Label } from "./styles";
interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
const TextArea: React.FC<IProps> = ({ placeholder, required, ...rest }) => {
  return (
    <Wrapper>
      <Input {...rest} />
      <Label>
        {placeholder}
        {required ? <span className="text-red-600">*</span> : null}
      </Label>
    </Wrapper>
  );
};

export default TextArea;
