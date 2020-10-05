import styled from "styled-components";
type Props = {
  isSticky?: boolean;
  isTransparent?: boolean;
  selected?: boolean;
};
export const Wrapper = styled.header`
  height: 90px;
  ${apply`w-full bg-gray-100 z-50 w-full`};
  background-color: ${({ isSticky, isTransparent }: Props) =>
    !isTransparent
      ? theme`colors.white`
      : isSticky
      ? "rgba(255,255,255,.9)"
      : `transparent`};
  top: 0;
  position: fixed;
  ${tscreen`tab-port`} {
    ${apply`p-5 fixed w-full z-50 right-0`}
  }
  ${tscreen`phone`} {
    ${apply`w-full px-3 py-3`}
  }
`;
export const Content = styled.div`
  ${apply`max-w-6xl m-auto h-full flex items-center relative`};
`;
export const Logo = styled.div`
  ${apply`cursor-pointer absolute left-0 bg-primary-color text-white text-2xl px-5 py-1 rounded font-semibold`}
`;
export const Menu = styled.ul`
  ${apply`flex justify-center absolute right-0`};
  direction: rtl;
`;
export const MenuItem = styled.li`
  ${apply`font-bold px-6 cursor-pointer text-black text-lg`}
`;
