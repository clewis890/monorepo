import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { title } from "assets/jss/nextjs-material-kit.js";

// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import GTranslateIcon from '@material-ui/icons/GTranslate';
import CreateIcon from '@material-ui/icons/Create';
import SecurityIcon from '@material-ui/icons/Security';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

// import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
  },
  section: {
    padding: "5px 0",
    textAlign: "center",
    // backdropFilter: 'blur(20px)',
    [theme.breakpoints.down('xs')]: {
      padding: '2px 0',
    },
  },
  cardHeader: {
    color: '#d6e0eb',
    fontWeight: '800',
    textShadow: '1px 2px 7px black',
  },
  title: {
    ...title,
    color: '#010103',
    fontVariantCaps: 'all-small-caps',  
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5em',
    },
  },
  description: {
    fontSize: '1.2em',
    borderRadius: '6px',
    color: "#010103",
    margin: '0 auto 30px auto',
    display: 'flex',
    maxWidth: '100%',
    alignItems: 'center',
    fontFamily: 'Roboto',
    lineHeight: '25px',
    letterSpacing: '2px',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 10px',
    },
     [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
  quote: {
    width: '30%',
    fontWeight: '400',
    marginRight: '12px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '1em',
      marginBottom: '20px',
      color: '#010103',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9em',
      margin: '0',
    },
  },
  descriptionText: {
    width: '70%',
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9em',
      textAlign: 'left',
      width: '100%',
      color: '#010103',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8em',
    },
  },
  container: {
    borderRadius: '6px',
    margin: '15px',
    paddingBottom: '20px',
    fontSize: '1.1rem',
    [theme.breakpoints.down('sm')]: {
      margin: '0',
      padding: '0',
    },
  },
  introparagraph: {
    backdropFilter: 'blur(20px)',
    // margin: '15px 10px 0 10px',
    // boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.48), 0 7px 10px -5px rgba(0, 0, 0, 0.25)",
    borderRadius: '6px',
    padding: '0 20px',
    margin: '20px 0',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.88em',
      boxShadow: 'none',
      backdropFilter: 'none',
      backgroundColor: '#fff',
      padding: '0',
    },
  },
  list: {
    width: '100%',
    fontFamily: 'Roboto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#010103',
    margin: '0 auto 30px auto',
    fontSize: '1.2em',
    padding: '0 10px',
    // lineHeight: '25px',
    // letterSpacing: '2px',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      margin: '0 0 30px 0',
      fontSize: '0.88em',
      textAlign: 'left',
      // fontWeight: '500',
      letterSpacing: '1.2px',
    },
  },
  tabparagraph: {
    // padding: '15px',
    margin: '20px 10px',
    fontSize: '1.165rem !important',
    wordSpacing: '2.2px !important',
    lineHeight: '1.8em !important',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
  textCenter: {
    fontSize: '1.2rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      wordSpacing: '1px',
      letterSpacing: '0.4px',
      padding: '0 4px',
    },
  },
}));

// const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center" className={classes.container}>
        {/* <h2 className={classes.cardHeader}>Than!<br />We offer:</h2> */}
          <GridItem xs={12} className={classes.introparagraph}>
          <h2 className={classes.title}>
            DAB Law Office offers<br />
            Customized, Personal Attention
          </h2>
          <h5 className={classes.description}>
            <span className={classes.quote}>
              <em>“Practicing law is not like running a corner grocery. One size does not fit all.”</em>
            </span><br />
            <span className={classes.descriptionText}>
              David Augustus Ball has handled an extensive array of legal matters over the course of his career.  He has learned that every matter must be handled individually; there is no cutting and pasting.  He gives personal attention to every matter at every stage:  no paralegals, no secretaries, no clerks touch any client’s file.  He does it all personally.  He follows matters every step of the way and keeps the client informed.  He will handle any matter that appeals to his sense of justice; he is not for sale to the highest bidder.  Among the matters he is happy to lend a helping hand with are:
            </span>
            <br />
          </h5>
          <h5 className={classes.list}>
            <span>
              Wills, Probate and anything having to do with the deceased<br />Divorce, separation, custody of children, support <br /> Prenuptial and matrimonial advice - Mediation of disputes of all types <br /> Harassment, defamation - Real estate sales and purchases <br /> Protection of LGBTQ rights - Constitutional violations - Criminal Law
            </span>
          </h5> 
        </GridItem>
        </GridContainer>
        <GridContainer>
        <GridItem md={12} lg={10} className={classes.tabparagraph}>
              <CustomTabs
                headerColor="info"
                tabs={[
                  {
                    tabName: "",
                    tabIcon: SecurityIcon,
                    tabContent: (
                      
                      <p className={classes.textCenter}>
                        <b>AFRAID OF LAWYERS? HATE JURY DUTY? INTIMIDATED
                       BY JUDGES? TREMBLE AT THE THOUGHT OF CROSS EXAMINATION?</b>
                      <br />
                      “To minimize risk, you should only consider going to 
                      court as a last resort.” Don’t worry:  You have come
                      to the right place.  David Augustus Ball has practiced
                      law in New York, New Orleans and a host of other 
                      jurisdictions for more than a quarter of a century.
                      As a result, there is almost nothing he has not seen.
                      One thing he knows, however, is that “having your
                      day in court” does not always mean that you will
                      receive justice.  Often, going to court is the
                      worst decision you can make, and the only ones
                      who seem to win are the bureaucrats who handle
                      the case from the moment it’s filed and the lawyers.
                      It’s just the way our legal system – the
                      “adversarial” system – has developed.
                      Sometimes, the best way to receive justice is
                      to take a deep breath and analyze your problem
                      from every angle with a highly experienced attorney
                      who has seen it all and try to reach a compromise
                      with the other side – be it your spouse, your
                      business partner, a government entity or a service provider.
                      </p>
                    )
                  },
                  {
                    tabName: "",
                    tabIcon: VerifiedUser,
                    tabContent: (
                      <p className={classes.textCenter}>
                      <b>RELIGIOUS SENSITIVITY</b>
                      <br />
                      Before becoming an attorney, David received a Master’s
                      degree in Religion from Yale University.  His book 
                      <a href="/writing"> Triptych</a> (Andalus Publishing, 2017) deals with the
                      intersection between religion and the law.  He has
                      rendered advice for more than a decade in Islamic
                      law (Shari’a), and is extremely sensitive to a wide 
                      range of Christian doctrine and Jewish law. He aims 
                      to tailor a solution to your particular situation.   
                      Do your religious beliefs prevent you from divorcing 
                      and remarrying?  Let David discuss options with you.  
                      He has spent more than 25 years drafting agreements 
                      between spouses and talking to both sides of a dispute 
                      to help them come to amicable terms with each another.  
                      His expertise is helping people find a solution that 
                      suits them.
                      </p>
                    )
                  },
                  {
                    tabName: "",
                    tabIcon: CreateIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                      <b>ESTATE PLANNING AND MANAGEMENT OF AFFAIRS AFTER DEATH</b><br />
                        Are you worried about what will happen after you die?  This is only normal:  You spend a lifetime raising a family and accumulating assets, and you are understandably concerned that everything you have saved and acquired will evaporate or be squandered when you aren’t here physically.  Let David help you to structure your affairs so that when you pass away, your spouse, significant other, favorite house of worship or charity, children and other relatives are treated as you wish, and to keep any of it from being abandoned to some state entity.  In short, the goal is to ensure that your private affairs and assets will never have to see the inside of a Surrogate’s Court or be subjected to the vagaries and interminable delays and costs of the New York legal system.
                      </p>
                    )
                  },
                  {
                    tabName: "",
                    tabIcon: GTranslateIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                      <b>MULTILINGUAL ASSISTANCE</b><br />
                        Can’t make yourself understood in English?  No problem.  David Augustus Ball speaks, reads and writes:
                      <br />
                      <span style={{ fontWeight: '600' }}>Español - Français - Kréyòl - Português  - אידיש - العربية  - Deutsch</span>
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>     
      </GridContainer>
    </div>
  );
}
