import classNames from "classnames";

import Header from "components/Header/Header"
import HeaderLinks from "components/Header/HeaderLinks"
import Parallax from "components/Parallax/Parallax"
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridContainer"
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js"
import Footer from "components/Footer/Footer"

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

import TeamSection from "pages-sections/LandingPage-Sections/TeamSection"
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection"
import AboutSection from "pages-sections/LandingPage-Sections/AboutSection"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Home"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter responsive image={require("assets/img/newyork-unsplash.jpg")}>
          <div className={classes.container}>
            <GridContainer style={{ padding: '0 15px' }}>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>DAB Law Office, P.C.</h1>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <TeamSection />
            <WorkSection />
            <SectionCarousel />
            <AboutSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  