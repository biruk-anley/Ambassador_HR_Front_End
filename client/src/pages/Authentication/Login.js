import React, { useState, useEffect, useRef, useContext } from "react";
import {

  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import axios from "../../axios";

const SignupImage = process.env.PUBLIC_URL + "/img/new.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',

    width: "100%",
    paddingLeft: "6px",
    paddingRight: "6px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 5,
      paddingRight: 5,
    },
  },
  root: {
    display: "flex",
    width: '80%',
    border: "1px solid rgba(0, 0, 0, .2)",
    justifyContent: 'space-around',
    flexWrap: "nowrap",
    background: "white",
    borderRadius: "15px",
    height: "550px",
    padding: 10,
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
    marginLeft: '158px',
    width: "90%",
    marginTop: '40px',
    [theme.breakpoints.down("sm")]: {
      /*width:'80%'*/
    },
    "@media (max-width:960px)": {
      marginLeft: '105px',
      marginTop: '10px'
    },
  },
  submit: {
    background: "#3293A8",
    borderRadius: "5px",
    width: "70%",
    height: "50px",

    margin: theme.spacing(1, 0, 2),
    "&:hover": {
      background: "rgba(50, 147, 168,0.79)",
    },
    "@media (max-width:760px)": {
      width: "80%"
    },
  },

  login: {
    fontWeight: '800',
    marginLeft: '65px',
    "@media (max-width:760px)": {

      marginLeft: '15px'
    },

  },
  textField: {
    margin: "10px 0",
    borderRadius: "10px",
    width: "70%",


    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    border: "0px solid #eee",
    borderLeftWidth: "7px",
    borderLeftColor: "rgba(215,215,215,0.47)",
    "& input": {
      color: "rgba(57,50,50,0.25)",
      border: "0px solid #eee",
      height: '25px',
      borderRadius: "10px",
      width: "100%",
    },
    "@media (max-width:760px)": {
      width: "80%",
    },
  },
  texts:
  {
    marginLeft: '-210px',
    "@media (max-width:760px)": {
      marginLeft: '-105px',
    }
  },
  inputAdornment: {
    background: "rgba(215,215,215,0.87)",
    borderRadius: "7px 0px 0px 7px",
  },
  imgHolder: {

    backgroundColor: "rgba(215,215,215,0.1)",
    marginLeft: '25px',
    borderRadius: "15px",
    marginBottom: "auto",
    display: "flex",
    width: "70%",
    marginTop: 'auto',
    height: "auto",
    paddingBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    width: '40%',
  },
}));

function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("/api/v1/employee/login",
      
    {
      email, password,
    }
    ).then((response) => {
      localStorage.setItem('jwt', response.data.token)
      localStorage.setItem('employee', JSON.stringify(response.data.data))
      history.push({pathname:"/Noticeboard", state: { detail: response.data }});
    })
    .catch((error) => {
      console.error(error);
      setError('Incorrect username or password. Please try again.');
    });
  }
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <div className={classes.imgHolder}>
          <img
            src={SignupImage}
            alt=""
            width="60%"

            style={{
              borderRadius: "8px",
              marginTop: "20px",
              marginLeft: "20px",
              marginBottom: "-20px",
            }}
          />
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", heigh: "auto", marginTop: '20px', marginLeft: '-110px' }}
        >

          <form className={classes.form} noValidate >
            <Typography
              align="center"
              component="h1"
              variant="h5"
              style={{ padding: 10 }}
              className={classes.texts}
            >
              Login
            </Typography>
            <TextField
              variant="outlined"
              margin="none"
              required
              fullWidth
              id="Email"
              onChange={(event) => setEmail(event.target.value)}
              label="Email"
              name="Email"
              autoComplete="Email"
              autoFocus
              className={classes.textField}
            />
            <TextField
              variant="outlined"
              margin="none"
              required
              fullWidth
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"

              className={classes.textField}
            />

            <Button
              id="login"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Log in
            </Button>





          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
