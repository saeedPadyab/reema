import styled, { keyframes } from "styled-components";
const zoomInAnim = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

type IProps = {
  img: string;
  direction: string;
};
export const Wrapper = styled.div`
  min-height: 800px;
  ${apply`w-full bg-no-repeat bg-right bg-contain`};
  z-index: 1;
  background-image: ${({ img, direction }: IProps) => `linear-gradient(
    ${direction === "ltr" ? "77deg" : "-77deg"},
    #f7f8fa 0%,
    #f7f8fa 63%,
      transparent 63%
    ),url(${img})`};
  background-size: 100%;
`;

export const Section = styled.div`
  ${apply`max-w-5xl w-full h-full m-auto`};
  padding-top: 180px;
`;
export const Content = styled.div`
  ${apply`flex flex-col justify-start`};
  width: 65%;
  padding-inline-end: 30px;
`;

export const Title = styled.h1`
  ${apply`text-black font-semibold text-5xl text-center`};
`;

export const Description = styled.div`
  ${apply`text-lg text-center mt-4`};
`;

export const SearchWrapper = styled.div`
  ${apply`bg-white flex p-2 px-3 mt-10 shadow rounded-full`};
  min-height: 50px;
`;

export const Input = styled.input`
  ${apply`flex-1 border-none px-2`};
  &:focus {
    ${apply`outline-none`};
  }
`;

export const SearchButton = styled.button`
  ${apply`bg-secondary-color rounded-full text-white p-3 font-bold text-xl`};
`;
export const CategoriesWrapper = styled.div`
  ${apply`flex flex-wrap mt-10 w-full`};
  animation: ${zoomInAnim} .2s linear;
`;
export const CategoryItemWrapper = styled.div`
  ${apply` bg-white rounded-lg shadow text-center flex flex-col items-center justify-center cursor-pointer`};
  margin-inline-end: 15px;
  width: calc(25% - 15px);
  min-height: 120px;
  &:hover {
    ${apply`shadow-lg`};
  }
`;
export const CategoryItemTitle = styled.h3`
  ${apply` text-lg font-semibold mt-3`};
`;

export const CategoryIcon = styled.div`
  ${apply`text-3xl text-secondary-color text-center`};
`;
