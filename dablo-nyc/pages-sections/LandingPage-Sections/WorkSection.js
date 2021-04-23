import React, { useState, useReducer, useRef } from "react";
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
// @material-ui/icons
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Modal from "@material-ui/core/Modal"
import Close from "@material-ui/icons/Close";
import Swal from 'sweetalert2'

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide direction="down" ref={ref} {...props} />
  );
});

// Initial State for Contact Form
const initialState = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

// reducer for form state
function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.value
      };
    case 'email':
      return {
        ...state,
        email: action.value
      };
    case 'message':
      return {
        ...state,
        message: action.value
      };
    default:
      throw new Error();
  }
}

export default function WorkSection({ env }) {
  const [formState, dispatch] = useReducer(reducer, initialState); 
  const [classicModal, setClassicModal] = React.useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false);
  const [statusMessage, setStatusMessage] = useState(" ");

  const classes = useStyles();

    // User can see how many characters they can type, out of
    // the 1500 limit
  const message_html = watch('message_html') || "";
  const messageCharsLeft = 1500 - message_html.length;

  function sendEmail(e, icon, title) {    
    e.preventDefault();

    emailjs.sendForm('gmail', process.env.TEMPLATE_ID, e.target, process.env.USER_ID)
      .then((result) => {  
        setClassicModal(false);
        Swal.fire({
          timer: 10000,
          timerProgressBar: true,
          icon: 'success',
          title: 'Thanks!',
          text: 'Your message has been sent successfully!',
        });
      }, (error) => {
          setClassicModal(false);
          Swal.fire({
            timer: 10000,
            timerProgressBar: true,
            icon: 'error',
            title: 'Oops!',
            text: 'Something went wrong. Try again in a few minutes!',
          });
        });
    e.target.reset();
  }

  return (
    <div className={classes.section} style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <GridContainer justify="center" className={classes.container}>
        <GridItem xs={12} sm={12} md={10} lg={12} 
          style={{ backgroundColor: 'lightslategray', boxShadow: '1px 2px 8px black', borderRadius: '6px', padding: '20px, 5px, 25px, 5px', margin: '15px, 5px' }}>
          <h2 className={classes.title}>Contact Me</h2>
            <p className={classes.description}>
              Send me a summary of your case, and I will reach out 
              to schedule a consultation over the phone or video conference.
              The consultation is free of charge.            
            </p>
              <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
                <Button 
                  variant="contained"
                  color="danger"
                  onClick={() => setClassicModal(true)}
                >
                  Fill out Form
                </Button>
              </GridItem>
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>                      
                    <h4 className={classes.modalTitle}>
                      Please include your name, email and a summary of your case so that I can review your case and schedule a consultation with you.
                    </h4> 
                  </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <form 
                        onSubmit={sendEmail}
                        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
                      >
                        <GridContainer className={classes.formContainer}>
                          <GridItem xs={12} sm={12} md={6}>
                            <input
                              type="text"
                              placeholder="Your Name"
                              className={classes.input}
                              id="name"
                              fullwidth="true"
                              name="from_name" 
                              ref={ register({ required: true, minLength: 2 }) }
                              // onChange={e => setName(e.target.value)}
                              required
                            />
                            {errors.from_name && errors.from_name.type === 'required' && (
                              <p className={classes.errormessage}>Please enter a name</p>
                            )}
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <input
                              type="text"
                              placeholder="Your Email"
                              className={classes.input}
                              id="email"
                              fullwidth="true"
                              name="reply_to" 
                              ref={ register({ required: true }) }
                              // onChange={e => setEmail(e.target.value)}
                              required
                            />
                            {errors.reply_to && errors.reply_to.type === 'required' && (
                              <p className={classes.errormessage}>
                                What's the best Email to contact you?
                              </p>
                              )}
                          </GridItem>
                          <GridItem xs={12} sm={12} md={12}>
                            <textarea
                            type="text"
                            style={{ maxWidth: '525px', maxHeight: '600px' }}
                            className={classes.input}
                            placeholder="Summary of Your Case"
                            id="message"
                            maxLength='1500'
                            fullwidth="true"
                            autoresize="true"
                            rows='5'
                            columns="15"
                            name="message_html"
                            ref={ register ({ required: true }) }
                            // onChange={e => setFeedback(e.target.value)}
                            required
                            />
                            {errors.message_html && errors.message_html.type === 'required' && (
                              <p className={classes.errormessage}>
                                Please enter a message
                              </p>
                            )}
                          <p className="message-chars-left">{messageCharsLeft}</p>
                          </GridItem>
                          <DialogActions className={classes.modalFooter}>
                            <p style={{ backgroundColor: 'unset', fontFamily: 'Garamond', padding: '12px', borderRadius: '6px', fontSize: '1.2em', color: 'yellow', textShadow: '2px 1px 5px black', fontWeight: '700', textTransform: 'uppercase' }} className="status-message">{statusMessage}</p>
                              <button 
                                type="submit" 
                                className={classes.close}
                                value="Send message"
                                onClick={() => setClassicModal(false)}
                              >
                                Close
                              </button>
                              <button 
                                type="submit" 
                                className={classes.submit} 
                                value="Send message"
                              >
                                Submit
                              </button>                  
                          </DialogActions>
                        </GridContainer>
                      </form>
                    </DialogContent>
                </Dialog>
        </GridItem>
      </GridContainer>
    </div>
  );
}
