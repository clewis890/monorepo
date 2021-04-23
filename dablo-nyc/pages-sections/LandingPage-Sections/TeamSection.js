import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import placeholder from "assets/img/placeholder.jpg";

const useStyles = makeStyles(styles);

// const useStyles = makeStyles((theme) => ({
// }))

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Meet David</h2>
        <GridContainer>
            <Card plain>
              <GridItem xs={8} sm={8} md={4} className={classes.itemGrid}>
                <img src={placeholder} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                David Augustus Ball
                <br />
                <small className={classes.smallTitle}>Esquire</small>
              </h4>
              </Card>
                    <GridItem xs={12} md={10} lg={6} xl={8}>
                        <h5 className={classes.description} styles={{alignSelf: 'center'}}>
                            David Augustus Ball, a native of New York City, has practiced law for more than a quarter of a
                        century in Louisiana and New York, and served as a legal consultant, corporate legal advisor and
                        arbitrator in a diverse range of foreign jurisdictions, among them Saudi Arabia, Oman, Bolivia,
                        Egypt, France, and Germany.   Though he began his career as the sole law clerk to a federal bankruptcy judge in the Cajun parishes
                        of southwestern Louisiana, David proudly calls himself a general practitioner who has never shied
                        away from representing a client whom he believes he can help. His professional background, both
                        foreign and domestic, runs the gamut from setting up foreign joint ventures, advising on agency and
                        distributorship agreements, drafting and litigating employment procedures and labor dispute
                        mechanisms, and serving as an expert to multinational companies on Islamic law (Shari’a). 
                        </h5>
                    </GridItem>
                    <GridItem xs={12} md={10} lg={6} xl={4}>
                        <h5 className={classes.description}>
                        As a litigator, he is no stranger to the civil, criminal, probate and family courts, and has argued and
                        briefed a broad range of cases in federal and state courts of appeal, as well as taken several deathpenalty cases up to the U.S. Supreme Court. He has given advice on, written legal opinions and
                        arbitrated multimillion dollar construction disputes, drafted wills and planned estates, plotted
                        strategy on divorce and custody matters, and represented clients in a number of real estate and coop
                        sales and purchases.
                        </h5>
                    </GridItem>   
        </GridContainer>
    </div>
  );
}
