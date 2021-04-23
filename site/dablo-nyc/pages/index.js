// import React, { Component } from "react";
// import Router from "next/router";
// import Head from 'next/head'

//  export default class Index extends Component {
  // componentDidMount = () => {
  //   Router.push("/landing");
  // };

  // render() {
  //   return <div />;
  // }
// }

import React from "react";
import Head from 'next/head'
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Head>
        <meta type="description" content="DAB Law Office - " />
      </Head>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Home"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter responsive image={require("assets/img/newyork-unsplash.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>DAB Law Office, P.C.</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}


