import 'modern-normalize';
import theme from 'components/baseStyles/Variables.styled';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Inria Sans', sans-serif;
  font-family: 'Kumar One', cursive;
  font-family: 'Montserrat', sans-serif;

  background-color: ${(props) => props.theme.white};
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

a{
  padding: 0;
  margin: 0;
  text-decoration: none;
}

img {
  display:block;
  max-width: 100%;
  height: auto;
}
//-----modal windows-----//
#popup-root {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 45;

    width: 100vw;
    height: 100vh;

    opacity: 1;
    visibility: visible;

    background-color: #0000006b;
    transition: opacity .3s linear 50ms, visibility .3s linear 50ms; 
}

#popup-root.is-hide {
  pointer-events: none;
  opacity: 0;
  visibility: hidden;

  width: 0;
  height: 0;
}
`;
