import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
a{
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
}

img{
    width: 100%;
    vertical-align: bottom;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

ul{
    list-style: none;
}`;
