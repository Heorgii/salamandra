import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

const Container = styled.div`
  padding: 0 110px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 15px 238px;
  }
`;

const Subtitle = styled.h2`
  color: ${props => props.theme.orange};
  font-family: ${theme.fonts[2]};
  font-size: ${theme.fontSizes.large};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 25px 0;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.extra};
    margin: 35px 0;
  }
`;

const SubtitleText = styled.h3`
  color: ${props => props.theme.orange};
  font-family: ${theme.fonts[2]};
  font-size: ${theme.fontSizes.mediumPlus};
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.large};
  }
`;

export { Container, Subtitle, SubtitleText };
