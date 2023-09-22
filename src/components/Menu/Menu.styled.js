import styled from "styled-components";
import theme from "components/baseStyles/Variables.styled";

const MenuBox = styled.div`
  padding-top: 200px;
  /* overflow-x: hidden; */
`;

const MenuSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 60px 0;
  width: 100%;
`;

const MenuTitle = styled.h2`
  color: ${theme.colors.braun};
  font-family: ${theme.fonts[2]};
  font-size: ${theme.fontSizes.large};
  font-style: normal;
  font-weight: 700;
  line-height: 29.26px;
  text-transform: capitalize;
  margin: 25px 0;
`;

const MenuList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  gap: 25px;
  margin-top: 20px;
  justify-items: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const MenuListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  list-style: none;
  width: 180px;
  /* height: 450px; */
  background: ${theme.colors.white};
  -webkit-box-shadow: 3px 2px 4px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 3px 2px 4px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 3px 2px 4px 0px rgba(0, 0, 0, 0.5);
  margin-right: 2px;
`;

const Img = styled.img`
  width: 180px;
  height: 200px;
`;

const InfoBox = styled.div`
width: 100%;
padding: 5px;
`;

const TitleItem = styled.h4`
font-family: ${theme.fonts[1]};
font-size: ${theme.fontSizes.medium};
font-style: normal;
font-weight: 700;
line-height: normal;
color: ${theme.colors.black};
`;

const AlcogolItem = styled.h5`
font-family: ${theme.fonts[1]};
font-size: ${theme.fontSizes.small};
font-style: normal;
font-weight: 700;
line-height: normal;
color: ${theme.colors.black};
`;

const InfoItem = styled.div`
width: 100%;
padding-top: 21px;
display: flex;
flex-direction: row;
justify-content: start;
`;
const PriceItem = styled.div`
width: 50%;
`;
const DetailsItem = styled.div`
width: 50%;
display: flex;
flex-direction: column;
gap: 3px;
align-items: end;
`;
const DetailsText = styled.p`
color: ${theme.colors.gray};
font-family: ${theme.fonts[1]};
font-size: ${theme.fontSizes.extraSmall};;
font-style: normal;
font-weight: 400;
text-align: right;
line-height: normal;
`;
const DetailsTitle = styled.p`
color: ${theme.colors.black};
font-family: ${theme.fonts[1]};
font-size: ${theme.fontSizes.small};;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: capitalize;
`;
const Details = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 3px;
align-items: end;
padding: 10px;
`;

export { Img, MenuListItem, MenuList, MenuTitle, MenuSection, MenuBox, InfoBox, TitleItem, AlcogolItem, InfoItem, PriceItem, DetailsItem, DetailsText, DetailsTitle, Details};
