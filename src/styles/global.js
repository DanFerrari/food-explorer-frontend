import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
} 
body{
  background-color: ${({theme}) => theme.COLORS.DARK_400};
  }

input ,span 
{
  font-family: 'Roboto', sans-serif;
  
  outline: none;
}
button,h1,h2,h3,h4,h5,h6,a{
  font-family: 'Poppins', sans-serif;  
  outline: none;
  
}



a{
  text-decoration: none;
}


button, a{
  cursor: pointer;
  transition: filter 0.2s;
  
}
button:hover , a:hover{
filter: brightness(0.9);
}



`;