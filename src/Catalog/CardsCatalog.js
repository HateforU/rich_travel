import icon_food from "./icon_food.png";
import icon_price from "./icon_price.png";
import icon_star from "./icon_star.png";
import icon_taxi from "./icon_taxi2.png";
import icon_wifi from "./icon_wifi.png";

import { Card, CardImg, Button } from "react-bootstrap";

import styled from "styled-components";

const Catalog = styled.div`
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
  &:hover{
     transition-duration: 0.3s;
     background-color: rgba(250, 252, 126, 0.71);
   }

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
display: block;
text-align: left;
padding-left: 20px;
margin-bottom: 5px;
`
const StyledIconText = styled.div`
display: flex;
flex-direction: row;
`
const Name1 = styled.div`
margin-left: 10px;
margin-top: 5px;
`

const StyledIconText1 = styled.div`
display: flex;
flex-direction: column;
`

const customCard = ({ title, tourImage, tourstar,tourtransfer,tourfood, tourwifi, tourprice,}) => {
  return (
    <div>
      <Catalog>
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
            <div class=" name2">
              <StyledIcon>
                <StyledIconText>
                <div>
                  <img
                    src={icon_star}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="icon_star"
                  />
                </div>
                <Name1>{tourstar}</Name1>

                </StyledIconText>
              </StyledIcon>

              <StyledIcon>
                <StyledIconText>
                <div>
                  <img
                    src={icon_taxi}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="icon_staxi"
                  />
                </div>
                <Name1>{tourtransfer}</Name1>

                </StyledIconText>
              </StyledIcon>

              <StyledIcon>
                <StyledIconText>
                <div>
                  <img
                    src={icon_food}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="icon_food"
                  />
                </div>
                <Name1>{tourfood}</Name1>

                  </StyledIconText>
              </StyledIcon>

              <StyledIcon>
                <StyledIconText>
                <div>
                  <img
                    src={icon_wifi}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="icon_wifi"
                  />
                </div>
                <Name1>{tourwifi}</Name1>

                </StyledIconText>
              </StyledIcon>

              <StyledIcon>
              <StyledIconText>
                <div>
                  <img
                    src={icon_price}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="icon_price"
                  />
                </div>
                <Name1>{tourprice}</Name1>

                </StyledIconText>
              </StyledIcon>
              </div>
              <div class="name4">
                <p class="namep">|</p>
                <p class="namep">|</p>
                <p class="namep">|</p>
                <p class="namep">|</p>
                <p class="namep">|</p>
                <p class="namep">|</p>
                <p class="namep">|</p>
                <p class="namep">|</p>
                <p class="namep">|</p>

              </div>

            <div class="name3">
            <StyledIconText>
            With supporting text below as a natural lead-in to additional
            content.  With supporting text below as a natural lead-in to additional
              content  With supporting text below as a natural lead-in to additional
                content  With supporting text below as a natural lead-in to additional
                With supporting text below as a natural lead-in to additional
                content  With supporting text below.
              </StyledIconText>
            </div>
          </TextCard>
        </Cards>
      </Catalog>
    </div>
  );
};

export default customCard;
