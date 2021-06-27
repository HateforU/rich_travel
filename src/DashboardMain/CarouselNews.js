import picture1 from "./luxary1.jpg";
import picture2 from "./luxary3.jpg";
import picture3 from "./luxary5.jpg";
import picture4 from "./luxary2.jpg";
import picture5 from "./luxary4.jpeg";
import picture6 from "./luxary6.jpg";
import Carousel from "react-bootstrap/Carousel";

import styled from "styled-components";

const StyledCarouselNews = styled.div`
  display: flex;
  padding: 10px;
  text-align: center;

`;
const StyledTextNews = styled.div`
  color: #353c3f;
`;
const StyledTextNewsSale = styled.div`
  color: red;
  font-size:25px;

`;
const StyledTextNewsPrice = styled.div`
  margin-right:15px;
  font-size:20px;
`;
const StyledText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;

`;

const StyledPictureCarouselNews = styled.div`
  margin-right: 15px;
`;
const CarouselNews = () => {
  return (
    <div className="CarouselNews">
      <Carousel>
        <Carousel.Item>
          <StyledCarouselNews>
            <a href="/catalog1">
              <StyledPictureCarouselNews>
                <img
                  width="420"
                  className="d-block "
                  src={picture3}
                  alt="First slide"
                />
              </StyledPictureCarouselNews>
              <StyledTextNews>
                Dubai 5&#9734;
                <StyledText>
                  <StyledTextNewsPrice><s>$3000</s></StyledTextNewsPrice>
                  <StyledTextNewsSale>NEW $2500</StyledTextNewsSale>
                </StyledText>
              </StyledTextNews>
            </a>

            <a href="/catalog1">
              <StyledPictureCarouselNews>
                <img
                  width=" 420"
                  className="d-block "
                  src={picture2}
                  alt="First slide"
                />
              </StyledPictureCarouselNews>
              <StyledTextNews>
                Maldivs 5&#9734;
                <StyledText>
                  <StyledTextNewsPrice><s>$8000</s></StyledTextNewsPrice>
                  <StyledTextNewsSale>NEW $6500</StyledTextNewsSale>
                </StyledText>
              </StyledTextNews>
              <div>.</div>
            </a>

            <a href="/pagebali">
              <StyledPictureCarouselNews>
                <img
                  width=" 420"
                  className="d-block"
                  src={picture1}
                  alt="First slide"
                />
              </StyledPictureCarouselNews>

              <StyledTextNews>
                Bali 5&#9734;
                <StyledText>
                  <StyledTextNewsPrice><s>$9000</s></StyledTextNewsPrice>
                  <StyledTextNewsSale>NEW $7500</StyledTextNewsSale>
                </StyledText>
              </StyledTextNews>
            </a>
          </StyledCarouselNews>
        </Carousel.Item>

        <Carousel.Item>
          <StyledCarouselNews>
            <a href="/catalog1">
              <StyledPictureCarouselNews>
                <img
                  width="420"
                  className="d-block "
                  src={picture4}
                  alt="First slide"
                />
              </StyledPictureCarouselNews>
              <StyledTextNews>
                Rome 5&#9734;
                <StyledText>
                  <StyledTextNewsPrice><s>$8000</s></StyledTextNewsPrice>
                  <StyledTextNewsSale>NEW $6500</StyledTextNewsSale>
                </StyledText>
              </StyledTextNews>
            </a>

            <a href="/catalog1">
              <StyledPictureCarouselNews>
                <img
                  width=" 420"
                  className="d-block "
                  src={picture5}
                  alt="First slide"
                />
              </StyledPictureCarouselNews>
              <StyledTextNews>
              Monaco 5&#9734;
                <StyledText>
                  <StyledTextNewsPrice><s>$12000</s></StyledTextNewsPrice>
                  <StyledTextNewsSale>NEW $9500</StyledTextNewsSale>
                </StyledText>
              </StyledTextNews>
              <div>.</div>
            </a>

            <a href="/pagebali">
              <StyledPictureCarouselNews>
                <img
                  width=" 420"
                  className="d-block"
                  src={picture6}
                  alt="First slide"
                />
              </StyledPictureCarouselNews>

              <StyledTextNews>
                Hawaii 5&#9734;
                <StyledText>
                  <StyledTextNewsPrice><s>$9000</s></StyledTextNewsPrice>
                  <StyledTextNewsSale>NEW $8000</StyledTextNewsSale>
                </StyledText>
              </StyledTextNews>
            </a>
          </StyledCarouselNews>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselNews;
