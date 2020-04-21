import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }
  html{
    font-size: 62.5%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background-color: #312e28;
    color: #fff;
  }

  body, 
  input, 
  button{
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
  }

  button{
    cursor: pointer;
  }

`;
