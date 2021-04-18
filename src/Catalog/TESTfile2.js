import icon_food from "./icon_food.png";
import icon_price from "./icon_price.png";
import icon_star from "./icon_star.png";
import icon_taxi from "./icon_taxi2.png";
import icon_wifi from "./icon_wifi.png";

import { Card, CardImg, Button } from "react-bootstrap";

import styled from "styled-components";



const ContainerCatalog = styled.div`
  width: 1140px;
  margin-left: auto;
  margin-right: auto;
`;

const Cards = styled.div`
  background-color: rgba(255, 255, 255, 0.87);
  border-style: solid;
  border-color: rgba(8, 8, 8, 0.87);
  padding: 10px 10px 10px 10px;
  height: 265px;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const PictureCard = styled.div`
  float: left;
`;
const TextCard = styled.div`
  background: rgba(212, 211, 210, 0.65);
  width: 780px;
  float: left;
  height: 240px;
  color: black;
  margin-left: 13px;
`;

const StyledTitle = styled(Card.Title)`
align-items: center;
justify-content: center;
margin-top:5px;
font-size: 30px;
margin-bottom: -5px;
`
const StyledIcon = styled.div`
text-align: left;
padding-left: 20px;
margin-bottom: 5px;
`
const StyledIconText = styled.div`
padding-top: 35 px;
margin-left: 10px;

`


const customCard = ({
  title,
  tourImage,
  tourstar,
  tourtransfer,
  tourfood,
  tourwifi,
  tourprice,
}) => {
  return (
    <div>
      <ContainerCatalog>
        <Cards>
          <PictureCard>
            <img
              src={tourImage}
              width="320"
              height="240"
              className="d-inline-block align-top catalog1"
              alt="tourImage"
            />
          </PictureCard>

          <TextCard>
            <StyledTitle>{title}</StyledTitle>
            <StyledIcon>
              <div>
                <img
                  src={icon_star}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="icon_star"
                />
              {tourstar}
              </div>
            </StyledIcon>

            <StyledIcon>
              <div>
                <img
                  src={icon_taxi}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="icon_staxi"
                />
              </div>
            </StyledIcon>
            {tourtransfer}
            <StyledIcon>
              <div>
                <img
                  src={icon_food}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="icon_food"
                />
              </div>
            </StyledIcon>
            {tourfood}
            <StyledIcon>
              <div>
                <img
                  src={icon_wifi}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="icon_wifi"
                />
              </div>
            </StyledIcon>
            {tourwifi}
            <StyledIcon>
              <div>
                <img
                  src={icon_price}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="icon_price"
                />
              </div>
            </StyledIcon>
            {tourprice}
            With supporting text below as a natural lead-in to additional
            content.
          </TextCard>
        </Cards>
      </ContainerCatalog>
    </div>
  );
};

export default customCard;
