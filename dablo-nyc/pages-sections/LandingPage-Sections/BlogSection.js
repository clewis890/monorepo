import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/blogStyle.js";
// @material-ui/core components
import { withStyles, makeStyles } from "@material-ui/core/styles";
// Fit this in this BlogSection file
import React from "react";
import Head from "next/head";
import Prismic from '@prismicio/client'
import { RichText } from "prismic-reactjs";

// Project components & functions
import DefaultLayout from "layouts";
import { Header, PostList } from "components/home";
import { Client } from "utils/prismicHelpers";

const useStyles = makeStyles(styles);

export default function BlogSection()  {
    
  const classes = useStyles();
   
        return (
            <div className={classes.section}>
              <Head>
                <title>David Augusut Ball Blog</title>
              </Head>
                <h2 className={classes.title}>Blog</h2>
                    <GridContainer justify="center" styles={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <GridItem xs={10} sm={10} md={10} lg={8} style={{ fontFamily: 'system-ui', backgroundColor: '#fff', padding: '30px 20px' }}>
                        <h1>Blog</h1>
                        </GridItem>
                    </GridContainer>
            </div>
        )
}
