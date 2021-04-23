import css from "styled-jsx/css";

export const iconStyles = css.global`
    .scrollTop {
        position: sticky;
        width: fit-content;
        bottom: 130px;
        left: 700px;
        align-items: center;
        height: fit-content;
        display: flex;
        justify-content: center;
        z-index: 1000;
        cursor: pointer;
        animation: fadeIn 0.3s;
        transition: opacity 0.4s;
        opacity: 0.5;
        border-radius: 40px;
        color: royalBlue;
    }

    .scrollTop:hover {
        opacity: 1;
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 0.5;
        }
    }
    @media screen and (max-width: 450px) {
        .scrollTop {
            position: absolute;
            bottom: 50px;
            left: 450px;
            /* display: none; */
        } 
    }
    @media (max-width: 992px) {
        .scrollTop {
            left: 800px
        }
    }
    @media (max-width: 1600px) {
        .scrollTop {
            left: 1200px;
        }
    }
    
`;
