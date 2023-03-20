import { Button, Grid, Typography, makeStyles } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import smallhouse from "../images/addd.png";
import "./inputlocation.css";

import "react-datepicker/dist/react-datepicker.css";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    "& input[type=number]": {
      "&::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
      },
      "&::-webkit-outer-spin-button": {
        "-webkit-appearance": "none",
      },
      "-moz-appearance": "textField",
    },
    "& .MuiTypography-body2": {
      fontWeight: 800,
    },

    "& .MuiFormLabel-root": {
      fontWeight: 600,
      fontSize: 14,
      marginTop: -5,

      color: "#3378BE",
    },
    "& form": {
      /*[theme.breakpoints.down('sm')]:{
                padding:'0'
                    box-shadow: 4px 0px 20px 2px rgb(1 0 0 / 20%), -5px -5px 5px 5px rgb(0 0 0 / 5%);
            }*/
    },
    "@media (max-width:600px)": {
      "& form": {
        padding: "0px",
      },

    },
  },
  firstGrid: {
    background: "white",

    // boxShadow: "-9px 18px 16px rgba(.50, .5, .5, 0.05)",

    boxShadow: '4px 0px 20px 2px rgb(1 0 0 / 20%), -5px -5px 5px 5px rgb(0 0 0 / 5%)',

    borderRadius: "5px",
    "@media (max-width:600px)": {

      padding: "10px",
    },
  },

  input: {
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
  imageleader: {
    width: "80%",
  },
  addhouseimage: {
    position: "absolute",
    top: 320,
    left: 160,
    width: 400,
    "@media (max-width:1220px)": {
      left: 45,
      width: 300,
    },
    "@media (max-width:960px)": {
      display: "none",
    },
  },
  leadertitle: {
    color: "#3378BE",
    marginBottom: "15px",
  },
  headertitle: {
    color: "black",
    fontWeight: "bold",
    display: "flex",

    justifyContent: "center",
    marginRight: "40px",
    padding: "10px",
  },
  dataPicker: {
    "& .react-datepicker-wrapper": {
      display: "block",
    },
    "& input": {},
  },
  textarea: {
    padding: "10px",
    resize: "none",
    width: "115%",
    background: "#EEEEEE",
    border: "0.5px solid #9e9e9e",
    borderRadius: "5px",
    height: "125px",
    "&::-webkit-input-placeholder": {
      color: "rgba(57,50,50,0.3)",
    },

    "&::-moz-placeholder": {
      /* Firefox 19+ */ color: "rgba(57,50,50,0.3)",
    },

    "&:-ms-input-placeholder": {
      /* IE 10+ */ color: "rgba(57,50,50,0.3)",
    },
    "&:-moz-placeholder": {
      /* Firefox 18- */ color: "rgba(57,50,50,0.3)",
    },
    "@media (max-width:960px)": {
      width: "80%",
    },
  },
  inputsContainer: {
    marginTop: "40px",
  },
  buttons: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
  },
  buttonone: {
    width: "100%",
    paddingLeft: "30px",
    paddingRight: "30px",
    background: "#FFE061",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "5px",
    // marginLeft: "15px",
    color: "black",
    textTransform: "none",
    marginBottom: "15px",
    marginTop: "25px",
    fontWeight: '600',
    fontSize: '17px',

    "@media (max-width:980px)": {
      padding: "13px",
    },
  },
  options: {
    color: "white",

    paddingLeft: "25px",
    paddingRight: "25px",
    borderRadius: "8px",
    paddingTop: "6px",
    paddingBottom: "6px",
    cursor: "pointer",
  },
  dropZone: {
    "& .MuiDropzoneArea-root": {
      background: "#EEEEEE",
      marginBottom: "30px",
      maxHeight: "343",
      width: "30rem",
      padding: "10px",
      borderRadius: "10px",

      border: ".5px solid #9e9e9e",
      "@media (max-width:735px)": {
        width: "22rem",
      },
      "@media (max-width:460px)": {
        width: "17rem",
      },
    },
  },
  inputError: {
    color: "red",
    fontSize: "13px",
    display: "none",
    fontWeight: "normal",
  },
}));

function ShowUserCredentials({ setSideBar }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const employeeEmail = location.state.employeeEmail
  const employeePassword = location.state.employeePassword
  const onDone = async event => {
    event.preventDefault();
    history.push({ pathname: "/Employees" })
  
  }

  return (
    <Container maxWidth="md">
      <Container className={classes.root}>
        <Grid
          container
          className={classes.firstGrid}
          justifyContent="center"
          spacing={1}
        >
          <Grid item xs={12} md={12} justifyContent="center">
            <div>
              <div className={classes.headertitle}>
                <div className="subone">
                  <img src={smallhouse} className={classes.imageleader} />
                </div>
                <div className="subtwo">
                  <Typography
                    variant="h6"
                    style={{ marginBottom: "30px", marginTop: "35px" }}
                  >
                    Employee Credentials
                  </Typography>
                </div>
              </div>

            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div><p>Make sure to copy the employee's credentials now. You won't be able to see it again!</p></div>
          <div className={classes.inputsContainer}>
          <Typography
                variant="body2"
              >
                Email: {employeeEmail}
              </Typography>
              <Typography
                variant="body2"
              >
                Password: {employeePassword}
              </Typography>
          </div>
          
            <div className={classes.buttons}>
              <Button
                onClick={onDone}
                value="NA"
                variant="contained"
                className={classes.buttonone}
              >
                Done
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
export default ShowUserCredentials;
