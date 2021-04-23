import React, { Component, useState } from 'react'
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "components/CustomButtons/Button.js";
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'

const useStyles = makeStyles(styles);

export default function ContactForm() {
    const [classicModal, setClassicModal] = React.useState(false);
    const { register, handleSubmit, watch, errors } = useForm();
    // User can see how many characters they can type, out of
    // the 1500 limit
    const message = watch('message') || "";
    const messageCharsLeft = 1500 - message.length;

    const onSubmit = data => { console.log(data) }

    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('gmail', process.env.EMAILJS_TEMPLATE_ID, e.target, process.env.EMAILJS_USER_ID)
      .then((result) => {
          alert("Message sent successfully!")
          return;
        }, (error) => {
          alert("There was an error. Please try again in a few minutes.")
        });
        e.target.reset();
    }
  
    // render() {
        const classes = useStyles();
        const title = 'Contact Page';
        
        return (
          <div>
          <title>{title}</title>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            >
            <GridContainer className={classes.formContainer}>
              <GridItem xs={12} sm={12} md={6}>
                 {errors.from_name && errors.from_name.type === "required" && (
                  <div className={classes.alert} role="alert">Name is required</div>
                )}
                <input
                  type="text"
                  placeholder="Your Name"
                  className={classes.input}
                  id="name"
                  fullWidth
                  aria-invalid={errors.from_name ? "true" : "false"}
                  ref={ register({ required: true
                      // maxLength: {
                      //     value: 30,
                      //     message: "Please enter a name with fewer than 30 characters"
                      // }
                    })
                  }
                  name="from_name" 
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
               {errors.reply_to && errors.reply_to.type === "required" && (
                  <div className={classes.alert} role="alert">Please enter a valid email address.</div>
                )}
                <input
                  type="text"
                  placeholder="Your Email"
                  className={classes.input}
                  id="email"
                  fullWidth="true"
                  ref={
                    register({
                        required: true,
                        // pattern: {
                        //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]{2,}$/i,
                        //     message: "invalid email address"
                        // }
                    })
                  }
                  name="reply_to" 
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
               {errors.message_html && errors.message_html.type === "required" && (
                  <div className={classes.alert} role="alert">Please enter a message.</div>
                )}
              <input
                type="text"
                className={classes.input}
                placeholder="Summary of Your Case"
                id="message"
                maxLength="1500"
                fullWidth
                rows='30'
                columns="40"
                ref={ register({ required: true })
                }
                name="message_html"
              />
              <p style={{ marginLeft: '15px' }} className="message-chars-left">{messageCharsLeft}</p>
              </GridItem>
                
            </GridContainer>
          </form>
          </div>
        )
    }
