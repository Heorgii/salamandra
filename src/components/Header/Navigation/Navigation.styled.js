import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const NavBox = styled.div`
  margin-top: 240px;
  padding: 0 24px 0;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 0 64px 0;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.yellow};
    border-radius: 5px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  padding-bottom: 20px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-bottom: 15px;
  }

  @media screen and (min-width: 1637px) {
    justify-content: center;
    align-items: center;
  }
`;

export const NavListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  background: ${theme.colors.yellow};
  padding: 6px 13px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 6px 22px;
  }
`;

export const NavListItemLink = styled.a`
  color: ${theme.colors.white};
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.large};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
