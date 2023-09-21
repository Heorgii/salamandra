import React from 'react';
import {
  Hero,
  HeroImg,
  HeroImgDesk,
  HeroImgSalamandra,
  HeroImgSalamandra1,
  HeroImgSalamandraDesk,
  HeroImgSalamandraDesk1,
  ImgBox,
  Title,
  TitleBox,
  TitleDiscr,
} from './Header.styled';
import fon1 from 'images/hero/fon1.png';
import fon2 from 'images/hero/fon2.png';
import fon3 from 'images/hero/fon3.png';
import salamandra from 'images/hero/salamandra.png';
import fon1Desk from 'images/hero/fon1Desk.png';
import fon2Desk from 'images/hero/fon2Desk.png';
import fon3Desk from 'images/hero/fon3Desk.png';
import salamandraDesk from 'images/hero/salamandraDesk.png';

export const Header = () => {
  return (
    <Hero>
      <ImgBox>
        <HeroImg src={fon1} alt="" />
        <HeroImg src={fon2} alt="" />
        <HeroImg src={fon3} alt="" />

        <HeroImgDesk src={fon1Desk} alt="" />
        <HeroImgDesk src={fon2Desk} alt="" />
        <HeroImgDesk src={fon3Desk} alt="" />

        <TitleBox className="text-container">
          <HeroImgSalamandra src={salamandra} alt="" />
          <HeroImgSalamandraDesk src={salamandraDesk} alt="" />

          <Title>Salamandra</Title>
          <TitleDiscr>Cocktail bar</TitleDiscr>

          <HeroImgSalamandra1 src={salamandra} alt="" />
          <HeroImgSalamandraDesk1 src={salamandraDesk} alt="" />
        </TitleBox>
      </ImgBox>
    </Hero>
  );
};
