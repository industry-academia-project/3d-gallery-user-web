import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    .auth{
        width:100vw;
        height:100vh;
        display:flex;
        justify-content: center;
        align-items: center;
    }

`;

export default GlobalStyle;
