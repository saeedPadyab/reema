import styled from "styled-components";

export const Wrapper = styled.div`
  ${apply`flex flex-col bg-white shadow rounded-lg mt-10`}
`;
export const Header = styled.div`
  ${apply`flex justify-between items-center py-5 px-8 border-b border-gray-400`}
`;
export const Content = styled.div`
  ${apply`py-5 px-8 overflow-y-auto`};
  height: 180px;
`;
export const CategoryTitle = styled.h1`
  ${apply`text-black text-2xl font-semibold`}
`;
export const CloseIcon = styled.div`
  ${apply`text-4xl cursor-pointer`}
`;
export const ToolItem = styled.div`
  ${apply` cursor-pointer mb-3`};
  &:hover {
    ${apply`underline`};
  }
`;
