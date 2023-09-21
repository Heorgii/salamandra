import 'modern-normalize'
import { createGlobalStyle } from "styled-components";
import theme from './Variables.styled';

export const GlobalStyle = createGlobalStyle`
body {
  /* Raisonne Pro */
  font-family: 'Archivo', sans-serif;
  /* font-family: 'Barlow', sans-serif; */
  /* Nib Pro */
  /* font-family: 'Domine', serif; */
 font-family: 'Fraunces', serif;

  background-color:${theme.colors.fon};
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  transition: .3s ease;
  
  &.scroll {
      max-height: 100vh;
      overflow: hidden;
    }
 }

#root {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

 //-----reset-----
h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

img {
  display:block;
  max-width: 100%;
  height: auto;
}
`;
