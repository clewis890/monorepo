import { title, grayColor, successColor } from "assets/jss/nextjs-material-kit.js";
import buttonStyle from "assets/jss/nextjs-material-kit/components/buttonStyle.js"

const workStyle = {
  section: {
    fontFamily: 'Garamond',
    padding: "70px 0",
  },
  title: {
    ...title,
    fontFamily: 'EB Garamond, serif',
    color: '#010103',
    marginBottom: "30px",
    marginTop: "40px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
    // fontSize: '2em',
  },
  container: {
    width: '100%',
    margin: '0 auto',
  },
  description: {
    width: '100%',
    fontWeight: '400',
    fontFamily: 'Tenor Sans, sans-serif',   
    fontSize: '1em',
    color: "#010103",
    textAlign: "center",
    // wordSpacing: '3px',
    // letterSpacing: '2px',
    lineHeight: '30px',
    marginBottom: "30px auto",
    padding: '15px',
    backgroundColor: 'lightslategray',

   
   


  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: "center",
    paddingBottom: '25px',
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  alert: {
    color: 'red',
    fontWeight: '700',
    letterSpacing: '1.1px',
    margin: '10px',
  },
  input : {
    fontFamily: 'Roboto Slab',
    fontWeight: '700',
    fontSize: '0.9em',
    border: 'none',
    padding: '30px',
    margin: '15px 15px',
    color: '#777',
    backgroundColor: '#d6e0eb',
  },
  ...buttonStyle,
  submit: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: successColor,
    color: "#FFFFFF",
    boxShadow:
      "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: successColor,
      boxShadow:
        "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
  },
  close: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: grayColor,
    color: "#FFFFFF",
    boxShadow:
      "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: grayColor,
      boxShadow:
        "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
  }
};

export default workStyle;
