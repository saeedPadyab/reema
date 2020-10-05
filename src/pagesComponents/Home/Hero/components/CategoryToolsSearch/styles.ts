import styled from "styled-components";

export const Wrapper = styled.div`
  ${apply`absolute flex flex-col bg-white shadow rounded-lg mt-10 w-full`};
  top: 100px;
`;
export const Content = styled.div`
  ${apply`my-5 overflow-y-auto`};
  height: 180px;
`;
export const ToolItem = styled.div`
  ${apply`px-8 py-2 cursor-pointer mb-1`};
  &:hover {
    ${apply`bg-gray-200 font-semibold`};
  }
`;
