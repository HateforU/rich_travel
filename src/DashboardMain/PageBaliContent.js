import icon_news from "./icon_news.png";
import picture1 from "./luxary1.jpg";
import picture2 from "./luxary3.jpg";
import picture3 from "./luxary5.jpg";
import Carousel from "react-bootstrap/Carousel";

import styled from "styled-components";

import NavbarHeader from "./navbar/NavbarHeader.js";
import Footer from "./Footer.js";

const StyledCarousel = styled.div`
  margin-left: 70px;
  margin-top: 15px;

`;
const StyledText = styled.div`
  font-size: 55px;
  text-align: center;
  margin-top: 10px;
`;
const StyledText2 = styled.div`


`;

const PageBaliContent = () => {
  return (
    <div className="PageBaliContent1">
      <StyledText>
        <p> Bali</p>
      </StyledText>
      <div className="PageBaliContent">
      <StyledCarousel>
        <img  src={picture1} alt="First slide" width="380" height="260" />
      </StyledCarousel>
      
      <StyledText2>
      <div className="PageBaliContentText" >
      <p>
        Бали — настоящая сказка наяву, прекрасный остров, покрытый террасами
        изумрудных рисовых полей и лесами из гвоздичных и коричных деревьев,
        усыпанных ароматными цветами. Удивительные, поистине волшебные музыка,
        живопись и танцы, причудливые храмы, ласковый шепот теплых океанских
        волн. Но самое ценное сокровище острова — его люди, невероятно красивые
        и умелые, с успехом сочетающие в своей жизни реалии XXI века с его
        мотоциклами и интернет-кафе и традиции предков. Иногда Бали путают с
        вымышленным островом Бали-Хай Джеймса Миченера. Но этот остров должен
        был бы находиться на тысячи километров восточнее, чем настоящий Бали, на
        который во время Второй мировой войны не высаживались американские
        солдаты и который гораздо прекраснее, чем изображенный в романе.
      </p>
      </div>
      </StyledText2>
    </div>
    </div>
  );
};

export default PageBaliContent;
