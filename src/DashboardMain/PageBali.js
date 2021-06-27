import icon_news from "./icon_news.png";

import styled from "styled-components";

import NavbarHeader from "./navbar/NavbarHeader.js";
import Footer from "./Footer.js";
import PageBaliContent from "./PageBaliContent.js";


const PageBali=()=> {
  return (
    <div className="PageBali">
      <div className="containerText">
      <NavbarHeader />
      <PageBaliContent/>

      <Footer />
    </div>
    </div>

  );
}

export default PageBali;
