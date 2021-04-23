import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import { container } from "assets/jss/nextjs-material-kit.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/scalia.jpeg";
import image2 from "assets/img/stroessner.jpeg";

// import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles((theme) => ({
    container: {
      padding: '70px 0',
    },
    marginAuto: {
      marginLeft: "auto !important",
      marginRight: "auto !important",
      backgroundColor: 'lightslategray',
      borderRadius: '6px',
      boxShadow: '1px 3px 8px #777',
      [theme.breakpoints.down('xs')]: {
        boxShadow: 'none',
      },
    },
    carouselText: {
      backgroundColor: 'inherit', 
      fontFamily: 'Tenor Sans, sans-serif', 
      fontSize: '1.2em', 
      margin: '50px auto 0 auto', 
      color: '#010103', 
      fontWeight: '400', 
      letterSpacing: '2px'
    },
    '@media (max-width: 500px)': {
      carouselText: {
        fontSize: '1em',
        padding: '2px',
      }
    },
}));

export default function SectionCarousel() {
  const classes = useStyles();

  const settings = {
    className: "slider variable-width",
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        }
      },
    ],
  };
  return (
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={11} sm={12} md={10} lg={12} className={classes.marginAuto}>
            <Card carousel style={{ boxShadow: 'none', backgroundColor: 'inherit' }}
            >
              <Carousel {...settings} >
                <div>
                  <img src={image1} 
                  alt="First slide" 
                  className="slick-image"
                  />              
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>       
              </Carousel>
                <GridItem xs={12}>
                    <h5 className={classes.carouselText}>
                      The first photo, with Supreme Court Justice Antonin Scalia
                      was taken in 1993, when I was Managing Editor of 
                      Loyola Law Review and he came to give a talk on 
                      legislative interpretation.  
                    </h5>
                    <br />
                    <h5 className={classes.carouselText}>
                      The second photo, with Generalisimo Alfredo Stroessner, President of Paraguay from 1954 to 1989, 
                      was taken in 1986, when I was granted an audience with the President in the company of 
                      the former Ambassador to the US and then Senador Nacional, Dr. Mario Lopez Escobar.  
                      The men and women surrounding me were all major figures in Paraguayan politics:  
                      the leader of the Partido Colorado, the Mayor of Asuncion, the Chief Justice of 
                      the Supreme Court. 
                      </h5>
                </GridItem>
            </Card>
          </GridItem>

        </GridContainer>
      </div>
  );
}
