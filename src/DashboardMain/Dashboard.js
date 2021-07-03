import icon_sale from "./currency-exchange.svg";
import backgroundDashboard from "./backgroundDashboard.jpg";

import Carousel from "react-bootstrap/Carousel";
import picture1 from "./luxary1.jpg";
import picture2 from "./luxary3.jpg";
import picture3 from "./luxary5.jpg";
import picture4 from "./luxary2.jpg";
import picture5 from "./luxary4.jpeg";
import picture6 from "./luxary8.jpg";
import bird from "./bird.png";
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
      <div class="DashboardMainPage1">
        <div class="DashboardLeftDiv">
          <img class="DashboardLeftDivImg"
            width="150"
            src={bird}
            alt="1"
          />
          <p class="DashboardLeftDivP ">Liberty</p>
        </div>
        <div class="DashboardRightDiv">
          <p class="DashboardRightDivP1"> Your time is limited,</p>
          <p class="DashboardRightDivP2">  so don't waste it living someone else's life.</p>
          <button type="button" class="btn btn-light btn-lg buttonDashboard" id="js-btn">
            <a class="yakor" href="#yakor">Let's have a rest</a>
          </button>
        </div>
      </div>

      <div id="yakor" class="DashboardMainPage2">
        <div class="DashboardPage2LeftDiv">
          <div class="DashboardPage2Carousel">
        <Carousel>
          <Carousel.Item interval={2000}>
          <div class="block">
            <div>
              <div class="front">
                <a href="/catalog1">
                  <img
                    width="920"
                    height="520"
                    className="d-block "
                    src={picture4}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 class="TextCarouselCaption">ROME 5&#9734;</h3>
                  </Carousel.Caption>
                </a>
              </div>
              <div class="back">
                <div class="CarouselCaptionDiv">
                  <h1> HElllooo1</h1>
                  <button type="button" class="btn btn-light btn-lg buttonDashboardPage2">
                    <a class="buttonDashboardPage2" href="/catalog">
                      CATALOG
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <div class="block">
              <div>
                <div class="front">
                  <a href="/catalog1">
                    <img
                      width="920"
                      height="520"
                      className="d-block "
                      src={picture5}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3 class="TextCarouselCaption">MONACO 5&#9734;</h3>
                    </Carousel.Caption>
                  </a>
                </div>
                <div class="back">
                  <div class="CarouselCaptionDiv">
                    <h1> HElllooo2</h1>
                    <button type="button" class="btn btn-light btn-lg buttonDashboardPage2">
                      <a class="buttonDashboardPage2" href="/catalog">
                        CATALOG
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
          <div class="block">
            <div>
              <div class="front">
                <a href="/catalog1">
                  <img
                    width="920"
                    height="520"
                    className="d-block "
                    src={picture6}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 class="TextCarouselCaption">HAWAII 5&#9734;</h3>
                  </Carousel.Caption>
                </a>
              </div>
              <div class="back">
              <div class="CarouselCaptionDiv">
                <h1> HElllooo3</h1>
                <button type="button" class="btn btn-light btn-lg buttonDashboardPage2">
                  <a class="buttonDashboardPage2" href="/catalog">
                    CATALOG
                  </a>
                </button>
              </div>
              </div>
            </div>
          </div>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
          <div class="block">
            <div>
              <div class="front">
                <a href="/catalog1">
                  <img
                    width="920"
                    height="520"
                    className="d-block "
                    src={picture1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 class="TextCarouselCaption">BALI 5&#9734;</h3>
                  </Carousel.Caption>
                </a>
              </div>
              <div class="back">
                <div class="CarouselCaptionDiv">
                  <h1> HElllooo4</h1>
                  <button type="button" class="btn btn-light btn-lg buttonDashboardPage2">
                    <a class="buttonDashboardPage2" href="/catalog">
                      CATALOG
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
          <div class="block">
            <div>
              <div class="front">
                <a href="/catalog1">
                  <img
                    class="CarouselHover"
                    width="920"
                    height="520"
                    className="d-block "
                    src={picture2}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 class="TextCarouselCaption">MALDIVS 5&#9734;</h3>
                  </Carousel.Caption>
                </a>
              </div>
              <div class="back">
              <div class="CarouselCaptionDiv">
                <h1> HElllooo5</h1>
                <button type="button" class="btn btn-light btn-lg buttonDashboardPage2">
                  <a class="buttonDashboardPage2" href="/catalog">
                    CATALOG
                  </a>
                </button>
              </div>
              </div>
            </div>
          </div>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
              <div class="block">
                <div>
                  <div class="front">
                    <a href="/catalog1">
                      <img
                        class="CarouselHover"
                        width="920"
                        height="520"
                        className="d-block "
                        src={picture3}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3 class="TextCarouselCaption">DUBAI 5&#9734;</h3>
                      </Carousel.Caption>
                    </a>
                  </div>
                  <div class="back">
                    <div class="CarouselCaptionDiv">
                      <h1> HElllooo6</h1>
                      <button type="button" class="btn btn-light btn-lg buttonDashboardPage2">
                        <a class="buttonDashboardPage2" href="/catalog">
                          CATALOG
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                  </Carousel.Item>
          </Carousel>
          </div>
          <div >
          <button  type="button" class="btn btn-light btn-lg buttonDashboardPage2">
            <a  class="buttonDashboardPage2" href="/catalog">CATALOG</a>
          </button>
          </div>

        </div>
        <div class="DashboardPage2RightDiv">
          <p class="DashboardPage2RightDivP ">SALE</p>
        </div>
      </div>

      <div  id="js-plan">
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
      </div>


<div class="block">
  <div>
    <div class="front">
      <a href="/catalog1">
        <img
          class="CarouselHover"
          width="920"
          height="520"
          className="d-block "
          src={picture1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Dubai</h3>
        </Carousel.Caption>
      </a>
    </div>
    <div class="back">
      <h1> HElllooo</h1>
      <button type="button" class="btn btn-light btn-lg buttonDashboardPage2">
        <a class="buttonDashboardPage2" href="/catalog">
          CATALOG
        </a>
      </button>
    </div>
  </div>
</div>;



      <Footer />
    </div>


  );
};

export default Dashboard;
