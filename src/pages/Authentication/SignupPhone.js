import { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import backEndApi from "../../services/api";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import bell from '../images/notifybell.svg'
import { style } from "@mui/system";
const backgroundimages = process.env.PUBLIC_URL + "/img/back1.png";


const useStyles = makeStyles((theme) => ({
  container: {
    display: "",
    justifyContent: "center",
    
    
    
    width: "100%",
    paddingLeft: "90px",
  

    [theme.breakpoints.down("sm")]: {
      paddingLeft: 1,
      paddingRight: 1,
    },
      
  root: {
    display: "flex",
    width: "80%",
    border: "0px solid rgba(0, 0, 0, .2)",
    justifyContent: "space-around",
    flexWrap: "nowrap",
    background: "white",
    borderRadius: "17px",
    // border: '2px solid red',
  },
    height: "80vw",
    padding: 1,
    "& a": {
      color: "#3A6351",
    },

    [theme.breakpoints.down("sm")]: {
      "& form": {
        padding: 0,
      },
      "& root": {
        height: "80vw",
      }
    },
  },
  
lower: {
    flexDirection: "column",
    alignItems:'center',
    justifyContent: "center",
   marginTop:'70px',
    borderRadius: "15px",
    display: 'flex',
    width: "70%",
    fontSize:'1.5rem'
   
  },
  cardss: {
    flexDirection: "column",
    alignItems:'center',
    justifyContent: "center",
   
    borderRadius: "15px",
    
    marginLeft:'150px',
    fontSize:'1.5rem'
   
  },
  holder: {
    flexDirection: "column",
    alignItems:'start',
    justifyContent: "start",
    // border: '2px solid red',
    borderRadius: "15px",
    display: 'flex',
    width: "100%",
    marginTop:'70px',
   
    height: "100vh",

    "@media (max-width:960px)": {
      width: "80%",
    },
  },
  textss: {
  
    fontSize: '20px',
    lineHeight: '27px',
    fontWeight:'500',
    borderRadius: "15px",
    color:'black'
  },
  buttonone: {
    paddingLeft: "20px",
    paddingRight: "20px",
    background: "#FFE061",
    paddingTop: "13px",
    border: "2px solid white",
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom: "10px",
    borderRadius: "5px",
    marginLeft: "75px",
    marginTop: "5px",
    marginBottom: "7px",
    color: "black",
    textTransform: "none",
    width: "50%",
   fontSize:'18px',
  },
}));
const Noticeborad = () => {
 
  const historys = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.holder}>
        <div className={classes.upper}>

        <h3 style={{color:'red', fontSize:'22px', marginLeft:'55px'}}>Ambassader Human resource system</h3>
          <div style={{ color: 'black', fontSize: '4rem', display: 'flex', textAlign: 'center', fontWeight: '900' }}>
                Check Out <br></br>  list of <br></br> Announcements
          </div>
          <div className={classes.textss}>
            <p>
                This HR system will handle Announcements, employments information,<br>
                </br> voting system for elections  payment status for the employess. It will <br></br> simplify the system and make it  easy to handle the human resource
            </p>
          </div>
        </div>
        <div className={classes.lower}>
          <h2>Events</h2>
          <br></br>
          <Grid  container spacing={3} className={classes.cardss}>
            <Grid  item lg={4} xs={12}  md={4}>
              <Card sx={{ maxWidth: 370}}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={bell}
                />
                <br></br>
                  <CardContent>
                    <Typography style={{ color: 'black', fontSize: '20px', display: 'flex', justifyContent: 'center', fontWeight: '900' }}>
                      Meeting on Salary
                  </Typography>
                  <br></br>
                  <Typography style={{ color: 'black', fontSize: '18px', display: 'flex', justifyContent: 'center',lineHeight:'30px' }}>
                      There will be a meeting on salary <br></br> compensation and be there on time
                    </Typography>
                  
                  <div>
                      <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize:'16px',
                        p: -1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                      }}
                    >
                      
                      <Box sx={{
                      
                        fontSize: '18px',
                        p: -1,
                        m: 1,
                        color: '#7E7A7A',
                       
                      }}>14-19,January</Box>
                          <Box >By Alemayehu Getahun</Box>
                          
                      </Box>
                  </div>

                  
                  
                  </CardContent>
                  <CardActions>
                <button className={classes.buttonone}>Read More</button>
                    
                </CardActions>
              </Card>
            </Grid>

            <Grid  item lg={4} xs={12}  md={4}>
              <Card sx={{ maxWidth: 370}}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={bell}
                />
                <br></br>
                  <CardContent>
                    <Typography style={{ color: 'black', fontSize: '20px', display: 'flex', justifyContent: 'center', fontWeight: '900' }}>
                      Meeting on Salary
                  </Typography>
                  <br></br>
                  <Typography style={{ color: 'black', fontSize: '18px', display: 'flex', justifyContent: 'center',lineHeight:'30px' }}>
                      There will be a meeting on salary <br></br> compensation and be there on time
                    </Typography>
                  
                  <div>
                      <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize:'16px',
                        p: -1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                      }}
                    >
                      
                      <Box sx={{
                      
                        fontSize: '18px',
                        p: -1,
                        m: 1,
                        color: '#7E7A7A',
                       
                      }}>14-19,January</Box>
                          <Box >By Alemayehu Getahun</Box>
                          
                      </Box>
                  </div>

                  
                  
                  </CardContent>
                  <CardActions>
                <button className={classes.buttonone}>Read More</button>
                    
                </CardActions>
              </Card>
            </Grid>

            <Grid  item lg={4} xs={12}  md={4}>
              <Card sx={{ maxWidth: 370}}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={bell}
                />
                <br></br>
                  <CardContent>
                    <Typography style={{ color: 'black', fontSize: '20px', display: 'flex', justifyContent: 'center', fontWeight: '900' }}>
                      Meeting on Salary
                  </Typography>
                  <br></br>
                  <Typography style={{ color: 'black', fontSize: '18px', display: 'flex', justifyContent: 'center',lineHeight:'30px' }}>
                      There will be a meeting on salary <br></br> compensation and be there on time
                    </Typography>
                  
                  <div>
                      <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize:'16px',
                        p: -1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                      }}
                    >
                      
                      <Box sx={{
                      
                        fontSize: '18px',
                        p: -1,
                        m: 1,
                        color: '#7E7A7A',
                       
                      }}>14-19,January</Box>
                          <Box >By Alemayehu Getahun</Box>
                          
                      </Box>
                  </div>

                  
                  
                  </CardContent>
                  <CardActions>
                <button className={classes.buttonone}>Read More</button>
                    
                </CardActions>
              </Card>
            </Grid>
          </Grid>
      </div>
      </div>
      
      <br></br>
      
    </div>
  );
};

export default Noticeborad;


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// const images = process.env.PUBLIC_URL + "/img/bellbg1.png";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   text: {
//     padding: theme.spacing(2),
//   },
//   images: {
//     width: '60%',
    
//     position: 'relative',
//     top:'10',
//     height: 'auto',
//     padding: theme.spacing(2),
//   },
//   card: {
//     width: '100%',
//     height: 'auto',
//     padding: theme.spacing(2),
//   },
//   textss: {
//     fontSize: '20px',
//      lineHeight: '27px',
//     display: 'flex',
//      justifyContent:'center',
//      borderRadius: "15px",
//      color:'black'
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
// }));

// const MyComponent = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid container spacing={2}>
//           <Grid item xs={6} >
//             <h3 style={{ color: 'red', fontSize: '28px', marginLeft: '55px',textAlign:'center' }}>Ambassader Human resource system</h3>
//             <div style={{ color: 'black', fontSize: '4rem', display: 'flex',alignItems:'center',justifyContent:'center', textAlign: 'center', fontWeight: '900' }}>
//                 Check Out <br></br>  list of <br></br> Announcements
//           </div>
//             <div className={classes.textss}>
//            <p>
//                This HR system will handle Announcements, employments information,<br>
//                 </br> voting system for elections  payment status for the employess. It will <br></br> simplify the system and make it  easy to handle the human resource
//             </p>
//           </div>
//           </Grid>
//           <Grid item xs={6}>
//           <img src={ images} alt="Image" className={classes.images} />

//           </Grid>
//         </Grid>
//         <Grid item xs={12}>
//           <Card className={classes.card}>
//             <CardMedia
//               className={classes.media}
//               image="card-image-1.jpg"
//               title="Card 1"
//             />
//             <CardContent>
//               <Typography variant="body2">
//                 Card 1 content goes here
//               </Typography>
//             </CardContent>
//           </Card>
//           <Card className={classes.card}>
//             <CardMedia
//               className={classes.media}
//               image="card-image-2.jpg"
//               title="Card 2"
//             />
//             <CardContent>
//               <Typography variant="body2">
//                 Card 2 content goes here
//               </Typography>
//             </CardContent>
//           </Card>
//           <Card className={classes.card}>
//             <CardMedia
//               className={classes.media}
//               image="card-image-3.jpg"
//               title="Card 3"
//             />
//             <CardContent>
//               <Typography variant="body2">
//                 Card 3 content goes here
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>)
// }
// export default MyComponent;
