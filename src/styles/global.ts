import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }

        width: 100%;
        height: 100%;

        background-color: whitesmoke;
    }

    button  {
        cursor: pointer;
    }

    [disable] {
        opacity: 0.6,
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background-color: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: fit-content;
        max-width: 576px;
        background-color: #fff;
        padding: 3rem;
        position: relative;
        outline: none;
        border-radius: 5px;
        box-shadow: -1px 5px 6px -5px #000000;
    }

`;