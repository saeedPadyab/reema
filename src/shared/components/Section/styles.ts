import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({
    bgColor,
    bgImage,
  }: {
    bgColor?: string;
    bgImage?: string;
  }) =>
    bgImage ? `url(${bgImage})` : bgColor ? bgColor : theme`colors.white`};
  ${apply`py-20 bg-cover`}
`;
export const Content = styled.div`
  ${apply`flex flex-col max-w-5xl m-auto`}
`;
