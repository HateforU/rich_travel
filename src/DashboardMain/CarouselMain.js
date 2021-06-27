import picture1 from "./luxary1.jpg";
import picture2 from "./luxary3.jpg";
import picture3 from "./luxary5.jpg";
import Carousel from "react-bootstrap/Carousel";

import styled from "styled-components";

const StyledCarousel = styled.div`

`;

const CarouselMain = () => {
  return (
    <StyledCarousel>
      <div className="CarouselMain">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100  carouselmain" src={picture1} alt="First slide" />
            <Carousel.Caption>
              <h3></h3>
              <p>Мы знаем о каком отдыхе Вы мечтаете.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 carouselmain " src={picture2} alt="First slide" />
            <Carousel.Caption>
              <h3></h3>
              <p>Мы знаем как потратить Ваши деньги.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 carouselmain " src={picture3} alt="First slide" />
            <Carousel.Caption>
              <h3></h3>
              <p>Доверьте свои деньги и отдых проффесионалам.Ждем тебя.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </StyledCarousel>
  );
};

export default CarouselMain;
