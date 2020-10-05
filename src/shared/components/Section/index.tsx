import React from "react";
import { Wrapper, Content } from "./styles";

interface IProps {
  bgColor?: string;
  bgImage?: string;
}
const Section: React.FC<IProps> = ({ bgColor, bgImage = "", children }) => {
  return (
    <Wrapper bgColor={bgColor} bgImage={bgImage}>
      <Content>{children}</Content>
    </Wrapper>
  );
};
export default Section;
