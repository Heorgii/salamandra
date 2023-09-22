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
import fon1 from 'images/hero/fon1.webp';
import fon2 from 'images/hero/fon2.webp';
import fon3 from 'images/hero/fon3.webp';
import salamandra from 'images/hero/salamandra.png';
import fon1Desk from 'images/hero/fon1Desk.webp';
import fon2Desk from 'images/hero/fon2Desk.webp';
import fon3Desk from 'images/hero/fon3Desk.webp';
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
