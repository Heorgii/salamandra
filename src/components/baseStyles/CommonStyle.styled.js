import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: ${theme.breakpoints.desktop};
    padding: 0 40px;
  }
`;
