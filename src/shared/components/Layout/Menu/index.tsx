import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { Link, Router } from "../../../../../i18n";
// import useGlobalState from "@Hooks/useGlobal/useGlobalState";
import { Wrapper, Content, Logo, Menu, MenuItem } from "./styles";
// import useObjectPropsValue from "@Hooks/useObjectPropsValue";

interface IProps {}

const HeaderMenu: React.FC<IProps> = (): JSX.Element => {
  // const { getValue, objectToQuerystring } = useObjectPropsValue();
  // const { headerData, landingData } = useGlobalState();
  const [isSticky, setSticky] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < 45) setSticky(false);
      else setSticky(true);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const checkIsTransparent = (): boolean => {
    return router.pathname === "/";
  };

  return (
    <>
      <Wrapper
        className={isSticky || !checkIsTransparent() ? "shadow-md" : ""}
        isSticky={isSticky}
        isTransparent={checkIsTransparent()}
      >
        <Content>
          <Logo>Reema</Logo>
          <Menu>
            <MenuItem>Menu</MenuItem>
            <MenuItem>Login</MenuItem>
            <MenuItem>Blog</MenuItem>
          </Menu>
        </Content>
      </Wrapper>
    </>
  );
};

export default HeaderMenu;
