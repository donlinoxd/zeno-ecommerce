import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus, input, button {
        outline: none;
    }

    html {
        scroll-behavior: smooth;
    }

    a, a:visited {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
        font-size: 1rem;
    }

    ul {
        list-style: none;
    }

    svg {
        font-size: 1.5em;
    }

    body {
        font-family: 'Century Gothic', sans-serif;
        background-color: ${({ theme }) => theme.colors.gray};
        max-width: 1350px;
        padding: 0 5%;
        margin: 0 auto;
        width: 100%;
        ${({ theme }) => theme.screen.laptop} {
            padding: 0 8%;

        };
    }
`;
