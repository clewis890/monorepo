const customTabsStyle = {
  cardTitle: {
    display: 'flex', 
    // justifyContent: 'space-around',
    padding: "10px 10px 10px 0px",
    lineHeight: "24px"
  },
  cardTitleRTL: {
    float: "right",
    padding: "10px 0px 10px 10px !important"
  },
  displayNone: {
    display: "none !important"
  },
  tabsRoot: {
    minHeight: "unset !important",
  },
  tabRootButton: {
    margin: '0 7px',
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    padding: "10px 10px",
    borderRadius: "3px",
    lineHeight: "24px",
    border: "0 !important",
    color: "#fff !important",
    fontWeight: "500",
    fontSize: "12px",
    "&:last-child": {
      marginLeft: "0px"
    }
  },
  tabSelected: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transition: "0.2s background-color 0.1s"
  },
  tabWrapper: {
    display: "flex",
    justifyContent: 'space-around',
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    "& > svg": {
      verticalAlign: "middle",
      margin: "-1.55px 5px 0 0 !important"
    },
    "&,& *": {
      letterSpacing: "normal !important"
    }
    // styling for tab content     
    // padding: 15px;
    // font-size: 1.065rem;
    // word-spacing: 2.2px;
    // line-height: 1.7;
  }
};

export default customTabsStyle;
