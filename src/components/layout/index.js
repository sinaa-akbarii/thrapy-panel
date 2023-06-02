import Head from "next/head";
import Header from "components/header";
import SideBarMenu from "./sideBarMenu";
import { useState } from "react";
const Layout = ({ children, title }) => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const handleCollapseMenu = () => {
    setSideBarCollapsed((prev) => !prev);
  };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="" />
        <link rel="icon" href="" />
      </Head>
      <main className="main">
        <Header handleCollapseMenu={handleCollapseMenu} />
        <SideBarMenu
          collapse={sideBarCollapsed}
          handleCollapseMenu={handleCollapseMenu}
        />
        <div className={`content`}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
