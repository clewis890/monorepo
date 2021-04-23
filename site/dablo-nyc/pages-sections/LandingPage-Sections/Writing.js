import React from "react";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js"
import Typography from "@material-ui/core/Typography"

import classNames from "classnames";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/writing.js";

// @material-ui/core components
import { withStyles, makeStyles } from "@material-ui/core/styles";

// core components
import InfoArea from "components/InfoArea/InfoArea.js";

const useStyles = makeStyles(styles);

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      padding: '10px',
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 240,
      fontSize: theme.typography.pxToRem(14),
      border: '1px solid #dadde9',
      boxShadow: 
      '1px 2px 3px 8px, 1.4px 5px 4px 9px 0.07, 2.2px 7px 6.4px 11px 0.075, 2.8px 8.8px 7.5px 14.3px 0.054'
    },
  }))(Tooltip);

export default function Writing() {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <h2 className={classes.title}>Writing</h2>
            <GridContainer justify="center" style={{ backdropFilter: 'blur(7px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <GridItem xs={10} lg={8}>
                        <h5 className={classes.description}>
                            David is the author of Tryptich (Andalus Publishing, 2017), currently for sale on Amazon.
                        </h5>
                    </GridItem>
                    <GridItem xs={10} md={8} lg={10}>
                        <h5 className={classes.description}>
                        <Button
                        color="warning"
                        >
                        <a 
                        href="https://www.amazon.com/Triptych-David-Augustus-Ball/dp/1945979011"
                        target="_blank"
                        noopener="true"
                        noreferrer="true"
                        style={{ color: '#010103', fontWeight: '600', fontSize: '1.2em' }}
                        >
                            Buy Tryptich <br />Now on Amazon!
                        </a>
                        </Button> 
                        </h5>
                    </GridItem>
                    <GridItem xs={10} md={8} lg={10}>
                        <h5 className={classes.description}>
                           
                        </h5>
                    </GridItem>
                    </GridContainer>
                    </div>
    )
}
