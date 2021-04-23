/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          {/* <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
            <Button>David Augustus Ball</Button>
            <Button>About Me</Button>
            <Button>Blog</Button>
          </ButtonGroup> */}
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
              >
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/about"
                className={classes.block}
              >
                About
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/blog"
                className={classes.block}
              >
                Blog
              </a>
            </ListItem>
            {/* <ListItem className={classes.inlineBlock}>
              <a
                href="/law"
                className={classes.block}
              >
                Law
              </a>
            </ListItem> */}
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} DAB Law Office, P.C.{" "}
            All rights reserved.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
