import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0 auto;
}


body {
  font-family: "Montserrat";
   background-color: #000;
}




img {
  display: block;
  max-width: 100%;
  
}


ul {
    list-style: none;
    list-style-position: outside;
    padding: 0;

}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {

  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
`;
export default GlobalStyle;
