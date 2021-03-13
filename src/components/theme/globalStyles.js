import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Kumbh Sans', sans-serif;
        font-size: 16px;
        height: 100%;
        width: 100%;
    }

    body {
        min-height: 100vh;
        width: 100%;
    }

    body.scroll {
        overflow: hidden;
    }

    #root {
        min-height: 100%;
    }
`;

export default GlobalStyle;