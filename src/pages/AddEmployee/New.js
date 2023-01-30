import React, { useState, useEffect } from "react";
import { Button, Grid, Typography, makeStyles } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import mainpic from "../images/main.png";
import smallhouse from "../images/addd.png";
import "./inputlocation.css";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import backEndApi from "../../services/api";
import moment from "moment";
import { withStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import { addHouse, addHouseImg } from "../../features/house/houseSlice";

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
    boxShadow: "-9px 18px 16px rgba(.50, .5, .5, 0.05)",
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
    background: "#3293A8",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "5px",
    // marginLeft: "15px",
    color: "#fff",
    textTransform: "none",
    marginBottom: "15px",
    marginTop: "25px",

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

function NewListing({ setSideBar }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { addHouseIsLoading, addHouseIsSuccess, addHouseIsFail } = useSelector(
    (state) => state.house
  );


  

  const [Name, setName] = useState("");
  const [Sex, setSex] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [Gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [guestHouse, setGuestHouse] = useState(false);
  const [description, setDescription] = useState("");
  const [squareMeter, setSquareMeter] = useState("");
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isRedirectToHomepage, setRedirectToHomePage] = useState(false);
  const [DateOfBirthDate, setAvailableDate] = useState(new Date());
  const [validity, setValidity] = useState(false);

  useEffect(() => {
    if (addHouseIsSuccess) {
      history.push("/dashboard");
    }
  }, [addHouseIsSuccess]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    validateForm(e);
  };

  const listingStatusFilter = (e) => {
    if (e.currentTarget.value === "Pending") {
      return "Submitted";
    } else {
      return "Draft";
    }
  };

  const validateForm = (e) => {
    const product = {
      Name: Name,
      Sex: parseInt(Sex),
      monthlyPayment: parseInt(monthlyPayment),
      Gender: parseInt(Gender),
      squareMeter: squareMeter,
      phoneNumber: parseInt(phoneNumber),
      guestHouse: guestHouse,
      description: description,
      DateOfBirthDate: moment(DateOfBirthDate).format("DD-MM-YYYY"),
      listingStatus: listingStatusFilter(e),
      reviewStatus: e.currentTarget.value,
    };
    console.log("come 1 ");
    if (!Name) {
      document.getElementById("NameError").style.display = "block";
    }
    if (!Gender) {
      document.getElementById("GenderError").style.display = "block";
    }
    if (!monthlyPayment) {
      document.getElementById("monthlyPaymentError").style.display = "block";
    }
    if (!Sex) {
      document.getElementById("SexError").style.display = "block";
    }

    if (!phoneNumber) {
      document.getElementById("phoneNumberError").style.display = "block";
    }

    if (!DateOfBirthDate) {
      document.getElementById("DateOfBirthError").style.display = "block";
    }
    // if (!file) {
    //   document.getElementById("dropZoneImage").style.display = "block";
    // }
    // console.log("come 2 ");

    if (Name && Gender && monthlyPayment && Sex && phoneNumber) {
      setValidity(true);
      console.log("come 3 ");
      // pass the product as props
    }
    if (file) {
      console.log("here is");
      submitNewListingApiRequest(product);
    } else {
      console.log("come 4 ");
    }
  };

  const submitNewListingApiRequest = async (newLaunchDetails) => {
    const {
      Name,
      squareMeter,
      Sex,
      monthlyPayment,
      Gender,
      phoneNumber,
      guestHouse,
      description,
      listingStatus,
      reviewStatus,
    } = newLaunchDetails;

    const formDatas = {
      Name,
      squareMeter,
      Sex,
      monthlyPayment,
      Gender,
      phoneNumber,
      guestHouse,
      description,
      listingStatus,
      reviewStatus,
      DateOfBirthDate,
    };
    const formData = new FormData();
    file.forEach((fil) => {
      formData.append("files[]", fil);
    });

    formData.append("files[]", file);

    console.log(formDatas, "formDatasssssssssssss");
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "x-access-token": JSON.parse(localStorage.getItem("token")),
      },
    };
    // dispatch(addHouse(formDatas));
    // dispatch(addHouseImg(formData));

    let response = await axios.post(
      "http://localhost:5000/addhouse",
      formDatas,
      {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("token")),
        },
      }
    );
    let resImage = await axios.post(
      "http://localhost:5000/uploadHouseImage",
      formData,
      config
    );

    setRedirectToHomePage(true);
  };

  const onNameChanged = (e) => {
    if (e.target.value.length === 0) {
      document.getElementById("NameError").style.display = "block";
    } else {
      document.getElementById("NameError").style.display = "none";
    }
    setName(e.target.value);
    if (e.target.value !== 1) {
      setName(e.target.value);
    }
  };

  const onDescriptionChanged = (e) => {
    setDescription(e.target.value);
  };

  const onGenderChanged = (e) => {
    if (e.target.value === "Select Gender") {
      document.getElementById("GenderError").style.display = "block";
    } else {
      document.getElementById("GenderError").style.display = "none";
    }
    setGender(e.target.value);
  };

  const onMonthlyPaymentChanged = (e) => {
    if (e.target.value.length === 0) {
      document.getElementById("monthlyPaymentError").style.display = "block";
    } else {
      document.getElementById("monthlyPaymentError").style.display = "none";
    }

    setMonthlyPayment(e.target.value);
  };

  const onSexChanged = (e) => {
    if (e.target.value.length === "Select Bed Rooms") {
      document.getElementById("SexError").style.display = "block";
    } else {
      document.getElementById("SexError").style.display = "none";
    }
    setSex(e.target.value);
  };

  const onPhoneNumberChanged = (e) => {
    if (e.target.value.length === 0) {
      document.getElementById("phoneNumberError").style.display = "block";
    } else {
      document.getElementById("phoneNumberError").style.display = "none";
    }

    setPhoneNumber(e.target.value);
  };

  const onDateOfBirthChanged = (date) => {
    if (date === null) {
      document.getElementById("DateOfBirthError").style.display = "block";
    } else {
      document.getElementById("DateOfBirthError").style.display = "none";
    }
    setAvailableDate(date);
  };

  const onSquareMeterChanged = (e) => {
    setSquareMeter(e.target.value);
  };

  const onDropZoneChange = (e) => {
    if (e[0]) {
      document.getElementById("dropZoneImage").style.display = "none";
    }
    setFile(e);
  };

  const onGuestHouseChanged = (e) => {
    setGuestHouse(e.target.value === "yes");
  };

  

  if (validity) {
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
                      Add Employees
                    </Typography>
                  </div>
                </div>
                <img src={mainpic} className={classes.addhouseimage} />
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className={classes.inputsContainer}>
                <Typography variant="body2" className={classes.leadertitle}>
                  Upload house image
                  <span style={{ opacity: "0.5", fontSize: "12px" }}>
                    (maximum 6 images)
                  </span>
                </Typography>

                <Grid style={{ marginTop: "5px" }}>
                  <Grid
                    itme
                    xs={12}
                    md={8}
                    className={classes.dropZone}
                    id="upload"
                    data-cy="content"
                  >
                    {/*Icon ={}*/}
                    <DropzoneArea
                      acceptedFiles={["image/*"]}
                      maxFileSize={6000000}
                      filesLimit={"6"}
                      dropzoneText={"Drag and drop an image here or click"}
                      onChange={onDropZoneChange}
                    />
                    {/*<DropzoneArea getPreviewIcon={handlePreviewIcon}
                                                    dropzoneText="Drag and drop a jpg, png or webp Icon, Or click to add"/>*/}
                  </Grid>
                  <Typography
                    variant="body2"
                    id="dropZoneImage"
                    className={classes.inputError}
                  >
                    You have to upload an image.
                  </Typography>
                </Grid>
              </div>
              <div className={classes.inputsContainer}>
                <Typography variant="body2" className={classes.leadertitle}>
                  is it Guest House
                </Typography>
                <label
                  htmlFor="guestYes"
                  className={classes.options}
                  style={{ background: "#3293A8" }}
                >
                  Yes
                </label>
                <input
                  type="radio"
                  value="yes"
                  id="guestYes"
                  name="guestRadio"
                  placeholder="is it Guest House"
                  onChange={onGuestHouseChanged}
                />
                <label
                  htmlFor="guestNo"
                  className={classes.options}
                  style={{ background: "#E21E2A", marginLeft: "10px" }}
                >
                  No
                </label>

                <input
                  type="radio"
                  value="no"
                  id="guestNo"
                  name="guestRadio"
                  onChange={onGuestHouseChanged}
                />
                <Typography
                  variant="body2"
                  id="guestHouseError"
                  className={classes.inputError}
                >
                  You have specific if it is guesthouse.
                </Typography>
              </div>

              <div className={classes.inputsContainer}>
                <TextField
                  id="outlined-multiline-static"
                  name="short Description"
                  className={classes.textarea}
                  label="Short Description"
                  placeholder="short Description about the house"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={description}
                  style={{ marginTop: "5px" }}
                  onChange={onDescriptionChanged}
                />
              </div>

              <br />
              <br />
              <div className={classes.buttons}>
                <Button
                  onClick={onFormSubmit}
                  value="NA"
                  variant="contained"
                  className={classes.buttonone}
                >
                  Save As Draft
                </Button>

                <Button
                  id="submit"
                  onClick={onFormSubmit}
                  value="Pending"
                  variant="contained"
                  className={classes.buttonone}
                  // style={{paddingRight:"500px"}}
                >
                  Submit For Review
                </Button>
              </div>
              <br />
              <br />
            </Grid>
          </Grid>
        </Container>
      </Container>
    );
  }
  return (
    <Container
      style={{ display: "flex", alignItems: "end", justifyContent: "ends" }}
    >
      <Container className={classes.root} maxWidth="md">
        <Grid
          container
          className={classes.firstGrid}
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          <Grid item xs={12} md={6} alignItems="center" justifyContent="center">
            <form>
              <div className={classes.headertitle}>
                <div className="subone">
                  <img
                    src={smallhouse}
                    alt=""
                    className={classes.imageleader}
                  />
                </div>
                <div className="subtwo">
                  <Typography
                    variant="h5"
                    style={{
                      marginBottom: "30px",
                      marginTop: "35px",
                      marginLeft: "-15px",
                    }}
                  >
                    Employees
                  </Typography>
                </div>

                {/* <Link to="/addtwohouse"></Link> */}
              </div>
              <img src={mainpic} className={classes.addhouseimage} alt="" />
              <div className={classes.inputsContainer}>
                <input
                  type="text"
                  list="NameOfCondominium"
                  id="Name"
                  name="Myname"
                  className="form__input"
                  placeholder="Full Name"
                  onChange={onNameChanged}
                  value={Name}
                />
                <div className="form__label">
                  <label htmlFor="Name" className="form__labels">
                    Name
                  </label>
                </div>

                <Typography
                  variant="body2"
                  id="NameError"
                  className={classes.inputError}
                >
                  Enter Your full name
                </Typography>
              </div>
              
              <div className={classes.inputsContainer}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Your  Gender
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    sx={{ height: 42 }}
                    label="Select Gender"
                    onChange={onGenderChanged}
                    name="selectNumberOfSexs"
                  >
                    <MenuItem value="0">Male</MenuItem>
                    <MenuItem value="1">Female</MenuItem>
                    
                  </Select>
                </FormControl>
                <Typography
                  variant="body2"
                  id="GenderError"
                  className={classes.inputError}
                >
                  you have to select Gender.
                </Typography>
              </div>

              
              <div className={classes.inputsContainer}>
               
                <div className={classes.dataPicker} id="date">
                  <DatePicker
                    name="date"
                    dateFormat="dd-MM-yyyy"
                    dayPlaceholder="21"
                    // selected={productLaunchDate}
                    className="form__input"
                    onChange={onDateOfBirthChanged}
                    value={moment(DateOfBirthDate).format("DD-MM-YYYY")}
                  />
                  <div className="form__label">
                    <label htmlFor="Name" className="form__labelss">
                      Available date start from
                    </label>
                  </div>
                </div>
                <Typography
                  variant="body2"
                  id="DateOfBirthError"
                  className={classes.inputError}
                >
                  You have to Set Launch Data.
                </Typography>
              </div>
              <div className={classes.inputsContainer}>
                <TextField
                  label="Phone number"
                  name="phone"
                  className={classes.input}
                  onChange={onPhoneNumberChanged}
                  value={phoneNumber}
                  placeholder="eg, 925762589"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+251</InputAdornment>
                    ),
                    className: classes.input,
                  }}
                />

                <Typography
                  variant="body2"
                  id="phoneNumberError"
                  className={classes.inputError}
                >
                  You have to enter your phone number.
                </Typography>
              </div>

              <div className={classes.buttons}>
                <br />
                <br />
                <Button
                  id="submit"
                  onClick={onFormSubmit}
                  value="Pending"
                  variant="contained"
                  className={classes.buttonone}
                >
                  {" "}
                  Next
                </Button>
                <br />
                <br />
              </div>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default NewListing;
