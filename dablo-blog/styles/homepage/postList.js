import css from "styled-jsx/css";

export const postListStyles = css.global`
  .blog-main {
    max-width: 700px;
    margin: auto;
  }

  .blog-post {
    backdrop-filter: blur(10px);
    padding: 8px;
    margin-bottom: 3rem;
  }

  .blog-post h2 {
    width: fit-content;
    color: #777;
    opacity: 1;
    margin: 0;
    transition: all 0.35s ease-in-out;
  }

  .blog-post h2:hover,
  .blog-post h2:focus {
    color: #000;
  }

  .blog-post-meta {
    color: #9a9a9a;
    font-family: "Lato", sans-serif;
    margin-bottom: 8px;
  }

  @media (max-width: 767px) {
    .blog-post h2,
    .blog-post h2:hover {
      text-shadow: none;
      transition: none;
      color: #9a9a9a;
      font-weight: 700;
    }
    .blog-post-meta,
    .blog-post-meta {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    .blog-post-meta {
      font-size: 16px;
    }
  }
`;
