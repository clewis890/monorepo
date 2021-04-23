import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title
} from "assets/jss/nextjs-material-kit.js";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: primaryColor
  },
  warning: {
    color: warningColor
  },
  danger: {
    color: dangerColor
  },
  success: {
    color: successColor
  },
  info: {
    color: infoColor
  },
  rose: {
    color: roseColor
  },
  gray: {
    color: grayColor
  },
  icon: {
    width: "36px",
    height: "36px"
  },
  descriptionWrapper: {
    color: '#D6E0Eb',
    overflow: "hidden"
  },
  title,
  description: {
    color: '#fff',
    overflow: "hidden",
    marginTop: "0px",
    textAlign: 'left',
    fontSize: "1.2em"
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    padding: '0',
    width: '100%',
    color: primaryColor,
    fontSize: '1.3rem',
    fontWeight: '300',
    wordSpacing: '25px',
    lineHeight: '30px',
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  }
};

export default infoStyle;
