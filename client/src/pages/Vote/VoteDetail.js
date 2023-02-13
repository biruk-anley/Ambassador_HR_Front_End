


import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import { Link } from '@material-ui/core';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import successgif from '../images/successs.gif';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    padding: theme.spacing(2),
  },
  formControl:{
        margin: theme.spacing(1),
        textAlign:'center',
        
        
        display:'flex',
        justifyContent:'center'
      },
      gif:{
        width:'70%',
        display:'flex',
        position:'relative',
        left:'15%',
    
        
      },
      button: {
        margin: theme.spacing(1, 1, 0, 0),
      },
  
  images: {
    width:'75%',

    position: 'relative',
    top: '-120px',
    left: '-10px',
     "@media (max-width:960px)": {
          top: '-570px',
       left: '86px',
        width:'45%',
        },
},

//   @keyframes shake {
//   10%, 90% {
//     transform: translate3d(-1px, 0, 0);
//   }
  
//   20%, 80% {
//     transform: translate3d(2px, 0, 0);
//   }

//   30%, 50%, 70% {
//     transform: translate3d(-4px, 0, 0);
//   }

//   40%, 60% {
//     transform: translate3d(4px, 0, 0);
//   }
// }
    
  
  imagesb:{
    width: '12rem',
    marginLeft:'25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center'
  },
  events:{
    fontSize: "3rem",
    position: 'relative',
    top: '-40px',
    left: '580px',
     "@media (max-width:960px)": {
          
       left: '146px',
        width:'45%',
        },
    
     
  },
  card: {
    width: '100%',
    height: 'auto',
    padding: theme.spacing(2),
  },
  cardss: {
    position: 'relative',
    top: '10px',
    left: '280px',
    
    width:'90%',
    display:'flex',
    
   
     borderRadius: "150px",
    
     fontSize:'1.5rem'
   
  },
  upper:{
    marginTop:'500px'
  },
  buttonone: {
    paddingLeft: "15px",
    paddingRight: "15px",
    background: "#FFE061",
    paddingTop: "8px",
    border: "2px solid white",
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom: "10px",
    borderRadius: "5px",
    marginLeft: "255px",
   
    marginBottom: "7px",
    color: "black",
    textTransform: "none",
    width: "30%",
   fontSize:'18px',
  },
  textt: {
    color: 'black',
    fontSize: '4rem',
    display: 'flex', alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '900',
      "@media (max-width:960px)": {
          fontSize:'2rem'
        },
  },
  texth: {
    color: 'red',
    fontSize: '28px',
    marginLeft: '55px',
    textAlign: 'center',
    "@media (max-width:960px)": {
      fontSize: '20px',
       marginLeft: '2px',marginTop:'80px'
        },
  },
  textss: {
    fontSize: '20px',
     lineHeight: '27px',
    display: 'flex',
     justifyContent:'center',
     borderRadius: "15px",
     color:'black'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const VoteDetail = () => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <div className={classes.events}>Voting Page</div>
        <Grid container spacing={5} className={classes.cardss}>
          <Grid item lg={8} xs={8} style={{textAlign:'center'}}>
          
            
              <Card sx={{ maxWidth: 300}}>
                  <CardContent>
                    <Typography style={{ color: 'black', fontSize: '20px', display: 'flex', justifyContent: 'center', fontWeight: '900' }}>
                      Vote For  President
                    </Typography>
                  
                  <Typography style={{ color: 'black', fontSize: '16px', display: 'flex',textAlign:'center', justifyContent: 'center',lineHeight:'30px', padding:'10px',fontWeight: '400' }}>
                      Vote for your president which will lead for 2 years
                    </Typography>
                  
                  <div>
                    <FormControl component="fieldset" >
                        <RadioGroup
                        aria-label="Candidate"
                        name="candidate"
                        className={classes.formControl}
                        value={selectedValue}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="Nuredin Bedru"
                          control={<Radio />}
                          label="Nuredin Bedru "
                        />
                        <FormControlLabel
                          value="Abeniezer Adugna"
                          control={<Radio />}
                          label="Abeniezer Adugna"
                        />
                        <FormControlLabel
                          value="Biruk Anley"
                          control={<Radio />}
                          label="Biruk Anley"
                        />
                      </RadioGroup>
                    </FormControl>
                    <br></br>
                    <Button
                      variant="contained"
                    
                      onClick={handleSubmit}
                      className={classes.buttonone}
                    >
                      Submit
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <img src={successgif} className={classes.gif}/>
                      <DialogTitle id="alert-dialog-title" style={{textAlign:'center', fontSize:'200px', fontWeight:'bold'}}>Success</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description"style={{textAlign:'center'}}>
                          Your selection has been submitted successfully!
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Close
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>

                  
                  
                  </CardContent>
                  
              </Card>
          </Grid>
          

            
          </Grid>
      </Grid>
    </div>)
}
export default VoteDetail;
































// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import successgif from '../images/successs.gif';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(3),
//   },
//   gif:{
//     width:'70%',
//     display:'flex',
//     position:'relative',
//     left:'15%',

    
//   },
//   button: {
//     margin: theme.spacing(1, 1, 0, 0),
//   },
// }));

// const CandidateSelection = () => {
//   const classes = useStyles();
//   const [selectedValue, setSelectedValue] = useState("");
//   const [open, setOpen] = useState(false);

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSubmit = () => {
//     setOpen(true);
//   };

//   return (
//     <div>
//       <FormControl component="fieldset" className={classes.formControl}>
//         <RadioGroup
//           aria-label="Candidate"
//           name="candidate"
//           value={selectedValue}
//           onChange={handleChange}
//         >
//           <FormControlLabel
//             value="candidate1"
//             control={<Radio />}
//             label="Candidate 1"
//           />
//           <FormControlLabel
//             value="candidate2"
//             control={<Radio />}
//             label="Candidate 2"
//           />
//           <FormControlLabel
//             value="candidate3"
//             control={<Radio />}
//             label="Candidate 3"
//           />
//         </RadioGroup>
//       </FormControl>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleSubmit}
//         className={classes.button}
//       >
//         Submit
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <img src={successgif} className={classes.gif}/>
//         <DialogTitle id="alert-dialog-title" style={{textAlign:'center', fontSize:'200px', fontWeight:'bold'}}>Success</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description"style={{textAlign:'center'}}>
//             Your selection has been submitted successfully!
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//       </div>
//   )
// }

// export default CandidateSelection;
      
