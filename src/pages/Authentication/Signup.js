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
import bell from '../images/notifybell.svg'
import { style } from "@mui/system";
const backgroundimages = process.env.PUBLIC_URL + "/img/newa.png";


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url(${backgroundimages})`,
    backgroundRepeat: "no-repeat",
    backgroundSize:'cover',
   
    
    backgroundClip:'cover',
    height:'900px',
    width: "100%",
    paddingLeft: "90px",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: 5,
      paddingRight: 5,
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
    height: "1200px",
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
  
lower: {
    flexDirection: "column",
    alignItems:'center',
    justifyContent: "center",
   
    borderRadius: "15px",
    display: 'flex',
    width: "70%",
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
          <Grid  container spacing={2}>
            <Grid  item lg={4} xs={14}  md={2.4}>
              <Card sx={{ maxWidth: 355 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="90"
                    image={bell}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className={classes.textss}>
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
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
