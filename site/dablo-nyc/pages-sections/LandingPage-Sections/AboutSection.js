import React from "react";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import classNames from "classnames";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/aboutStyle.js";

// @material-ui/core components
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    section: {
        padding: "70px 0",
        textAlign: "center",
        borderRadius: '6px',
    },
    title: {
    // ...title,
        color: '#010103',
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        fontFamily: `'EB Garamond', serif`,
        // textShadow: '1px 2px 8px black',
    },
    // ...imagesStyle,
    itemGrid: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    //   cardTitle,
      smallTitle: {
        color: "#6c757d"
    },
    cardBody: {
        width: '100',
        padding: '0',
        display: 'flex',
    },
    aboutsection: {
        height: 'fit-content',
    },
    description: {
        fontFamily: 'Tenor Sans, sans-serif',    
        fontWeight: '400',
        wordSpacing: '3px',
        letterSpacing: '2px',
        lineHeight: '30px',
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        margin: "15px auto",
        width: "100%",
        textAlign: 'left',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'lightslategray',
        boxShadow: '1px 3px 8px #777',
        color: '#000',
        borderRadius: '6px',
        [theme.breakpoints.down('xs')]: {
            letterSpacing: '0.5px',
            wordSpacing: '1px',
            boxShadow: 'none',
        },
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
}));

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      padding: '15px',
      backgroundColor: '#eaeaea',
      margin: '15px 50px',
      color: '#010103',
      maxWidth: 340,
      fontFamily: 'EB Garamond, serif',
      fontSize: theme.typography.pxToRem(14),
      border: '1px solid #dadde9',
      boxShadow: 
      '1px 2px 3px 8px, 1.4px 5px 4px 9px 0.07, 2.2px 7px 6.4px 11px 0.075, 2.8px 8.8px 7.5px 14.3px 0.054',
      '&:hover': {
        boxShadow: '1px 3px 8px #000',
      },
    }, 
  }))(Tooltip);

export default function AboutSection() {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <h2 className={classes.title}>About David</h2>
            <GridContainer justify="flex-start">
                        <GridItem item xs={12} md={10} lg={6} className={classes.aboutsection}> 
                        <h5 className={classes.description}>
                            Prior to establishing DAB Law Office, P.C., David practiced in one of the three largest and top-tier
                        firms in: New Orleans (Louisiana); Jeddah and Riyadh (Kingdom of Saudi Arabia); and Muscat and
                        Salalah (Sultanate of Oman). He has represented and counseled clients in all of the Gulf
                        Cooperation Council countries without exception, as well as most jurisdictions in Western Europe
                        and Asia. In furtherance of his clients’ matters, he has had the opportunity to visit and render advice
                        in 86 countries. Between 2003 and 2005, the U.S. Department of State retained David as an independent consultant
                        to perform an in-depth analysis of, and make recommendations on changing, anti-money laundering
                        and anti-terrorist legislation in 18 countries in Asia, Africa, and Europe.
                        </h5>
                        </GridItem>
                            <Divider />
                        <GridItem item xs={12} md={10} lg={6} className={classes.aboutsection}>
                        <h5 className={classes.description}>
                           Between 1996 and 1999, David served as Honorary Consul of the Republic of Bolivia in New
                        Orleans, fulfilling his lifelong dream of becoming a diplomat. He accompanied the Vice President
                        of Bolivia, Jorge Quiroga, on an official speaking tour and meetings with the U.S. Secretary of
                        Commerce in 1998, and was part of the official delegation chosen to receive the Presidents and First
                        Ladies of Haiti and Nicaragua during their visits to the Crescent City.
                        </h5>
                        
                        <GridItem item xs={4} sm={4} lg={6} 
                        // style={{height: 'fit-content'}} 
                        className={classes.aboutsection}>     
                        <HtmlTooltip
                        placement= "right"
                        interactive
                        title={
                        <React.Fragment>
                            <Typography color="inherit" styles={{ fontFamily: 'Roboto' }}>Beginning in high school,  {"David enjoyed and excelled in classical languages and is a natural linguist."}{' '}
                            {'He has spoken fluent French and Spanish since childhood;'}{' '}{'he also reads, writes and speaks'}{' '}
                            {"Arabic, German, Haitian Creole and Portuguese, and has worked in a number of other languages, such as Maltese, Indonesian and Afrikaans."}
                            </Typography>
                        </React.Fragment>
                        }
                        >
                        <Button className={classes.button} style={{ marginTop: '2rem' }}>Did you know?</Button>
                    </HtmlTooltip>
                        </GridItem>
                        </GridItem>
                        <Divider />
                    <GridItem item xs={12} sm={12} md={10} lg={6} className={classes.aboutsection}>
                         <h5 className={classes.description}>
                            He has distinguished himself as the
                        only American ever to appear before the Saudi Court of Appeal in Riyadh and address the judges in
                        Arabic on the details of the largest commercial case ever to be litigated in that country. He was also
                        appointed by the Court of Appeal of the Sultanate of Oman to serve as the sole arbitrator of a major
                        commercial dispute in the Arabic language. He has lectured frequently on a variety of legal and
                        theological topics in universities and cultural centers in Louisiana, Bolivia and Oman.
                        </h5>
                        </GridItem>
                            <Divider />
                        <GridItem xs={12} sm={12} md={10} lg={6} className={classes.aboutsection}>
                        <h5 className={classes.description}>
                            Born in 1962 as a first-generation American, David received his Bachelor of Arts (magna cum
                        laude, 1983) from The American University in Washington, DC; his Master of Arts (1985) from
                        Yale University, and his Juris Doctor in Common and Civil Law (magna cum laude, 1994) from
                        Loyola University in New Orleans. He was admitted to the practice of law in the State of Louisiana
                        (1994), the State of New York (1995), and the Bar of the Supreme Court of the United States
                        (1999), and recognized officially as a “Legal Consultant” by the Saudi and Omani government
                        authorities.
                        </h5>
                        </GridItem>
                    </GridContainer>
        </div>
    )
}