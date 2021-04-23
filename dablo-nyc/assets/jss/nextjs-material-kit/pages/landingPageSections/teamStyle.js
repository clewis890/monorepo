import { cardTitle, title } from "assets/jss/nextjs-material-kit.js";
import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.js";

const teamStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: '#010103',
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle: {
    color: "#010103",
    margin: "1.75rem 10px 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `'EB Garamond', serif`,
    fontSize: '2em',
  },
  smallTitle: {
    color: "#010103",
    fontSize: '0.6em',
  },
  cardBody: {
    width: '100',
    padding: '0',
    margin: '0 auto',
  },
  description: {
    color: "#010103",
    fontWeight: '400',
    fontFamily: 'Tenor Sans, sans-serif',    
    margin: "30px auto",
    width: "100%",
    textAlign: 'left',
    wordSpacing: '3px',
    letterSpacing: '2px',
    lineHeight: '30px',
    backgroundColor: 'lightslategray',
    padding: '15px',
    borderRadius: '6px',
    boxShadow: '1px 3px 8px #777',
    fontSize: '1em',
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
  },
  '@media (max-width: 768px)': {
    description: {
      fontSize: '0.85em',
    },
  },
  '@media (max-width: 500px)': {
    description: {
      fontSize: '0.9em',
      wordSpacing: '0',
      letterSpacing: '0',
    },
  },
};

export default teamStyle;
