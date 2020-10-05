import React from "react";
import Menu from "./Menu";
// import Footer from "./Footer";
import Meta from "@Shared/components/Meta";
import { MetaTags } from "@Interfaces/meta-tags";
// import { Modal } from "../Common/Modal";
import { Main, Content } from "./styles";

interface MainProps {
  metaTags: MetaTags;
}
const Layout: React.FC<MainProps> = ({ metaTags, children }): JSX.Element => {
  return (
    <Main>
      <Meta tags={metaTags} />
      <Menu />
      <Content>{children}</Content>
      {/* <Footer /> */}
      {/* <Modal /> */}
    </Main>
  );
};
export default Layout;
