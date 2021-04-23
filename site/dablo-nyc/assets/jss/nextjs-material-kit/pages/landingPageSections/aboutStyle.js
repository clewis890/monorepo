import { cardTitle, title } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";

const aboutStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
    borderRadius: '6px',
    marginTop: '20px',
  },
  title: {
    ...title,
    color: '#010103',
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    // textShadow: '1px 2px 8px black',
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  cardBody: {
    width: '100',
    padding: '0',
    display: 'flex',
  },
  aboutsection: {
    // display: 'flex',
    // // alignItems: 'center',
  },
  description: {
    wordSpacing: '3px',
    letterSpacing: '2px',
    lineHeight: '30px',
    padding: '15px',
    fontFamily: `'EB Garamond', serif`,
    display: 'flex',
    alignItems: 'center',
    margin: "15px auto",
    width: "100%",
    textAlign: 'left',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(32, 74, 85)',
    color: '#fff',
    borderRadius: '6px'
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  }
};

export default aboutStyle;
