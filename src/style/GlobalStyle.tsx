import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
   --color-primary: #df6464;
  --color-secondary: #ccff90;
  --color-tertiary: #ffff8d;
  --color-quaternary: #a0afff;
  --color-base: #ffc;

}

*,
*::before,
*::after {


}

  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    
  }

  *::-webkit-scrollbar-track {
    background: #161616;


  }

  *::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 10px;
    border: 0.5px solid #711fb08b;
    

  }


html{
  overflow: auto;

}

body {
  font-family: "Montserrat";
  background-color: #000;
  margin: 0 auto;
  padding: 0;

  



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
