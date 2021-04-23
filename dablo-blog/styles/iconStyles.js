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
        animation: fadeIn 0.4s;
        transition: opacity 0.4s;
        opacity: 0.7;
        border-radius: 40px;
        color: royalBlue;
        /* box-shadow: 1px 2px 8px #000; */
        /* color: royalBlue; */
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
    @media screen and (max-width: 1600px) {
        .scrollTop {
            left: 1200px;
        }
    }
    @media screen and (max-width: 1200px) {
        .scrollTop {
            left: 975px;
        }
    }
    @media screen and (max-width: 992px) {
        .scrollTop {
            left: 850px;
        }
    }   
    @media screen and (max-width: 768px) {
        .scrollTop {
            left: 750px;
        }
    }
    @media screen and (max-width: 450px) {
        .scrollTop {
            position: absolute;
            bottom: 50px;
            left: 450px;
        } 
    }
   
   
    
`;
