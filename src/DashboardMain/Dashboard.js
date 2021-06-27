import icon_sale from "./currency-exchange.svg";

import styled from "styled-components";

import NavbarHeader from "./navbar/NavbarHeader.js";
import CarouselMain from "./CarouselMain.js";
import Footer from "./Footer.js";
import CarouselNews from "./CarouselNews.js";

const StyledHeaderSales = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  height: 620px;
  text-align: left;
  color: #4d585b;
  padding-top: 30px;
  padding-left: 30px;
`;

const StyledIconSales = styled.div`
display: flex;
flex-direction: row;
  font-size: 40px;
`;
const StyledTextSale = styled.div`
margin-left:15px;

`;

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <NavbarHeader />
      <CarouselMain />

      <StyledHeaderSales>
        <StyledIconSales>
          <img
            src={icon_sale}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="logo"
          />

          <StyledTextSale>Sales</StyledTextSale>
          </StyledIconSales >
          <p>_________________________________________________________________________________________________</p>
          <CarouselNews />

      </StyledHeaderSales>



      <Footer />
    </div>
  );
};

export default Dashboard;
