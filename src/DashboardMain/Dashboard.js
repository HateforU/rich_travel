import icon_news from "./icon_news.png";

import styled from "styled-components";

import NavbarHeader from "./navbar/NavbarHeader.js";
import CarouselMain from "./CarouselMain.js";
import Footer from "./Footer.js";

const Ft = styled.div`
  font-size: 30px;
  height: 665px;
  text-align: left;
  color: #d6b216;
`;
const Dd = styled.div`
  padding-top: 30px;
  padding-left: 30px;
`;
const Dashboard = () => {
  return (
    <div className="Dashboard">
    <NavbarHeader />
    <CarouselMain />

    <Ft>
      <Dd>
        <img
          src={icon_news}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="logo"
        />
        News
        <p>_________________________________________</p>
      </Dd>
    </Ft>
    <Footer />
    </div>
  );
};

export default Dashboard;
