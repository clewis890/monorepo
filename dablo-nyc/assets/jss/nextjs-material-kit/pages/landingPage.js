import { container, title } from "assets/jss/nextjs-material-kit.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    fontSize: '18px',
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    textAlign: 'center',
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: '25px',
    backdropFilter: 'blur(1px)',
    borderRadius:' 6px',
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    backgroundImage: 'url("https://images.unsplash.com/photo-1498335746477-0c73d7353a07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80")',
    backgroundRepeat: 'repeat',
    backgroundSize: 'contain',
    backgroundColor: 'rgba(0,0, 0, 0.1)',
    margin: "-100px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    '@media (max-width: 500px)': {
      mainRaised: {
        margin: "-100px 0px 0px",
        borderRadius: '0',
      },
    },
};

export default landingPageStyle;
