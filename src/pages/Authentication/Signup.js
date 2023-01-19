import { useState } from "react";
import "./style.css";
import InputAdornment from "@mui/material/InputAdornment";
import { useHistory } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import Paper from "@mui/material/Paper";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../../context/UserAuthContext";
import { Link } from "react-router-dom";
import { makeStyles, TextField } from "@material-ui/core";
import flags from "react-phone-number-input/flags";
import Typography from "@material-ui/core/Typography";
import backEndApi from "../../services/api";
const SignupImage = process.env.PUBLIC_URL + "/img/new.png";
const backgroundimages = process.env.PUBLIC_URL + "/img/background.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url(${backgroundimages})`,
    height:'150vh',
    width: "90%",
    paddingLeft: "90px",
    paddingRight: "90px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 5,
      paddingRight: 5,
    },
  },
  root: {
    display: "flex",
    width: "83%",
    border: "0px solid rgba(0, 0, 0, .2)",
    justifyContent: "space-around",
    flexWrap: "nowrap",
    background: "white",
    borderRadius: "17px",
    height: "600px",
    padding: 1,
    "& a": {
      color: "#3A6351",
    },

    [theme.breakpoints.down("sm")]: {
      "& form": {
        padding: 0,
      },
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  form: {
    marginLeft: "205px",
    width: "90%",
    marginTop: "40px",
    [theme.breakpoints.down("sm")]: {
      /*width:'80%'*/
    },
    "@media (max-width:960px)": {
      marginLeft: "55px",
      marginTop: "10px",
    },
  },

  login: {
    fontWeight: "800",
    marginLeft: "65px",
    "@media (max-width:760px)": {
      marginLeft: "15px",
    },
  },
  phoneinput: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",

    padding: "20px",
    "@media (max-width:874px)": {
      width: "90%",
    },
    "@media (max-width:563px)": {
      width: "120%",
    },
  },
  passwordinput: {
    width: "52%",
    display: "flex",
    justifyContent: "center",
    border: "5px solid red",
    marginLeft: "120px",
    marginRight: "auto",
    border: "1px solid rgba(0, 0, 0, .2)",

    background: "white",
    borderRadius: "7px",
    height: "40px",
    "@media (max-width:980px)": {
      paddingLeft: "20px",
      paddingRight: "25px",
      display: "block",
    },
    "@media (max-width:880px)": {
      marginLeft: "77px",
      width: "72%",
    },
  },
  otpinput: {
    width: "52%",
    display: "flex",
    justifyContent: "center",

    marginTop: "20px",
    marginBottom: "20px",
    border: "1px solid rgba(0, 0, 0, .2)",

    background: "white",
    borderRadius: "7px",
    height: "40px",
  },
  textField: {
    border: "0px solid #eee",
    borderLeftWidth: "7px",
    borderLeftColor: "rgba(215,215,215,0.47)",
    "& input": {
      color: "rgba(57,50,50,0.25)",
      border: "0px solid #eee",
      height: "25px",
      borderRadius: "10px",
      width: "10%",
    },
    "@media (max-width:760px)": {
      width: "80%",
    },
  },
  texts: {
    marginLeft: "20px",
    "@media (max-width:760px)": {
      marginLeft: "-105px",
    },
  },
  inputAdornment: {
    background: "rgba(215,215,215,0.87)",
    borderRadius: "7px 0px 0px 7px",
  },
  authentication: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "15px",

    marginLeft: "25px",
    borderRadius: "15px",
    marginBottom: "auto",

    width: "50%",
    marginTop: "auto",
    height: "auto",

    "@media (max-width:960px)": {
      width: "80%",
    },
  },

  phoneauth: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "15px",

    marginLeft: "25px",
    borderRadius: "15px",
    marginBottom: "auto",

    marginTop: "auto",
    height: "auto",
    paddingBottom: "11px",
    "@media (max-width:960px)": {
      width: "80%",
    },
  },
  PhoneInputInput: {
    flex: "1 1",

    height: "30px",
    borderRadius: "5px",
    border: "1px solid red",
  },
  email: {
    background: "#3F51B5",
    color: "white",
    borderRadius: "5px",
    width: "57%",
    height: "47px",
    border: "1px solid white",

    margin: theme.spacing(1, 0, 2),
    "&:hover": {
      background: "rgba(	63, 81, 181,0.79)",
    },
    marginLeft: "40px",
    "@media (max-width:760px)": {
      width: "80%",
    },
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonss: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
  },
  buttonone: {
    paddingLeft: "20px",
    paddingRight: "20px",
    background: "#3293A8",
    paddingTop: "13px",
    border: "0.5px solid white",
    paddingBottom: "13px",
    borderRadius: "5px",
    marginLeft: "35px",
    marginTop: "25px",
    marginBottom: "25px",
    color: "#fff",
    textTransform: "none",
    width: "53%",

    "@media (max-width:980px)": {
      paddingLeft: "50px",
      paddingRight: "50px",
      display: "block",
    },
    textsField: {
      width: "100%",

      marginLeft: "1000px",
    },
    text: {
      marginLeft: "400px",
      textAlign: "center",
    },
    inputsContainer: {
      marginLeft: "400px",
      width: "100%",
    },
    input: {
      marginTop: "20px",
      marginBottom: "20px",
      width: "100%",
      height: "40px",
      border: "5px solid rgba(0, 0, 0, .5)",
      justifyContent: "space-around",
      borderRadius: "5px",
      marginLeft: "450px",

      padding: 15,
      background: "white",
      borderRadius: "7px",
    },
    otpinput: {
      marginBottom: "20px",
      width: "100%",
      height: "40px",
      border: "5px solid rgba(0, 0, 0, .5)",
      justifyContent: "space-around",

      borderRadius: "5px",

      padding: 15,
      background: "white",
      borderRadius: "7px",
    },
    recaptha: {
      marginLeft: "450px",
    },
    "&:hover": {
      color: "black",
      cursor: "pointer",
      color: "rgba(215,215,215,0.9)",
    },
  },
  buttontwo: {
    paddingLeft: "20px",
    paddingRight: "20px",
    background: "#3293A8",
    paddingTop: "8px",
    paddingBottom: "8px",
    borderRadius: "5px",
    marginLeft: "15px",
    marginTop: "15px",
    color: "#fff",
    textTransform: "none",
    width: "75%",
    "@media (max-width:980px)": {
      paddingLeft: "20px",
      paddingRight: "25px",
      display: "block",
    },
  },
  buttonverify: {
    paddingLeft: "27px",
    paddingRight: "36px",
    background: "#3293A8",
    paddingTop: "8px",
    paddingBottom: "8px",
    borderRadius: "5px",
    border: "5px",
    marginLeft: "15px",
    marginTop: "15px",
    color: "#fff",
    textTransform: "none",
    width: "75%",
    "@media (max-width:980px)": {
      paddingLeft: "20px",
      paddingRight: "25px",
      display: "block",
    },
    recaptha: {
      marginLeft: "450px",
    },
    "&:hover": {
      color: "black",
      cursor: "pointer",
      color: "rgba(215,215,215,0.9)",
    },
  },
  inputs: {
    padding: "10px",
    marginTop: "5px",
    width: "100%",
    height: "40px",

    "&::-moz-placeholder": {
      /* Firefox 19+ */ color: "rgba(57,50,50,0.3)",
    },
    "&:-ms-input-placeholder": {
      /* IE 10+ */ color: "rgba(57,50,50,0.3)",
    },
    "&:-moz-placeholder": {
      /* Firefox 18- */ color: "rgba(57,50,50,0.3)",
    },
  },
  imgHolder: {
    backgroundColor: "rgba(215,215,215,0.1)",
    marginLeft: "25px",
    borderRadius: "15px",
    marginBottom: "auto",
    display: "flex",
    width: "70%",
    marginTop: "auto",
    height: "auto",
    paddingBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const Noticeborad = () => {
 

  const historys = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.upper}>
        <h3>Ambassader Human resoursy system</h3>
        <div>Check Out list of Announcements</div>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit potenti porta purus venenatis turpis molestie varius, ac dapibus elementum ultrices senectus massa cursus id parturient volutpat rhoncus nulla. Pulvinar condimentum aenean potenti vel himenaeos mattis praesent litora </p>
      </div>
      <br></br>
      <div className={classes.lower}>
          <h2>Events</h2>
      </div>
    </div>
  );
};

export default Noticeborad;
