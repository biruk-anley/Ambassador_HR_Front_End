


import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import bell from '../images/votee.png';
import { Link, useLocation } from "react-router-dom";
import axios from "../../axios";

const images = process.env.PUBLIC_URL + "/img/bellbg1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    padding: theme.spacing(2),
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
    top: '-50px',
    left: '670px',
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
    marginLeft: '20px',
    marginRight: '20px',
    
   
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
    marginLeft: "115px",
   
    marginBottom: "7px",
    color: "black",
    textTransform: "none",
    width: "40%",
   fontSize:'18px',
  },
  links: {
    textDecoration: "none",
    width:'100%',
    fontSize: "13px !important",
    fontWeight: "bold",
  },
  eventt:{
    position:'relative',
    left:'75rem',
    border:'none',
    paddingLeft: "15px",
    paddingRight: "15px",
    background: "#FFE061",
    paddingTop: "8px",
    
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom: "10px",
    borderRadius: "5px",
    
   
    marginBottom: "7px",
    color: "black",
    textTransform: "none",
    width: "100%",
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

const Vote = () => {
  const classes = useStyles();
  const location = useLocation();
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'api/v1/poll'
      );

      setPolls(result);
    };

    fetchData();
  }, []);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        
        <div className={classes.events}>Votes</div>
        <Grid>
              <Link className={classes.links} to="/AddVote">
                  <button className={classes.eventt}> Add Vote</button>
              </Link>
        </Grid>
       
        <Grid container spacing={5} className={classes.cardss}>
          {
            polls ? (polls.map(poll => (
              <Grid item lg={4} xs={12} key={poll.id}>
                <Card sx={{ maxWidth: 300}}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image={bell}
                      className={classes.imagesb}
                  />
                    <CardContent>
                      <Typography style={{ color: 'black', fontSize: '18px', display: 'flex', justifyContent: 'center', fontWeight: '700' }}>
                        {poll.title}
                    </Typography>
                    
                    <Typography style={{ color: 'black', fontSize: '15px', display: 'flex',textAlign:'center', justifyContent: 'center',lineHeight:'30px', padding:'15px' }}>
                        DeadLine : {poll.deadline}
                      </Typography>
                    </CardContent>
                    <CardActions>
                    <Link className={classes.links} to="/VoteDetail">
                       <button className={classes.buttonone}>Vote</button>
                    </Link>
                      
                  </CardActions>
                </Card>
            </Grid> 
            ))):(<p>No polls yet...</p>)
            
          }
                   
        </Grid>
      </Grid>
     
    </div>
    )
}
export default Vote;
