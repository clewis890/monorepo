import { title } from "assets/jss/nextjs-material-kit.js";
import { textCenter } from "assets/jss/nextjs-material-kit/pages/componentsSections/tabsStyle"
import { makeStyles } from '@material-ui/core/styles'

const productStyle ={
  root: {
    width: '100%',
    maxWidth: '36ch',
  },
  section: {
    padding: "5px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    color: '#d6e0eb',
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    borderRadius: '6px',
    color: "#fff",
    fontWeight: '400',
  },
  container: {
    borderRadius: '6px',
    margin: '15px',
    paddingBottom: '20px',
    fontSize: '1.1rem',
  },
  list: {
    fontFamily: 'Roboto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'inherit',
    margin: '0 auto 30px auto',
    fontSize: '1.3em',
    textDecoration: 'bold',
    lineHeight: '25px',
    letterSpacing: '2px',
    maxWidth: '100%',
  },
  tabparagraph: {
    padding: '15px',
    fontSize: '1.165rem !important',
    wordSpacing: '2.2px !important',
    lineHeight: '1.8em !important',
  },
  textCenter: {
    fontSize: '1.1rem',
  },
};

export default productStyle;
