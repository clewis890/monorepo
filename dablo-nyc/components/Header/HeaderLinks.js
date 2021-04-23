/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="About"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          
          dropdownList={[
            <Link href="/about">
              <a className={classes.dropdownLink}>
                About Me
              </a>
            </Link>,
            // <a
            //   href="/writing"
            //   className={classes.dropdownLink}
            // >
            //   Writing
            // </a>
          ]}
        />
      </ListItem>
      <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Writing"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          
          dropdownList={[
            <Link href="/writing">
              <a className={classes.dropdownLink}>Writing</a>
            </Link>,
            <Link href="/blog">
              <a className={classes.dropdownLink}>Blog</a>
            </Link>
          ]}
        />
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="#"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip> 
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="#"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
       
      </ListItem> */}
    </List>
  );
}
