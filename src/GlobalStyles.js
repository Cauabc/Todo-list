import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        background-color: #181820;
        font-family: 'Fredoka', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`