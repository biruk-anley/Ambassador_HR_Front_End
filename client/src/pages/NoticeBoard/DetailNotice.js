import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@mui/material/CardActions';
import { Link } from '@material-ui/core';
import { selectNoticeEntities, deleteNotice } from '../../redux/slices/noticesSlice';
import { useDispatch, useSelector } from 'react-redux';

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
    top: '-40px',
    left: '520px',
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
    marginLeft: "115px",
   
    marginBottom: "7px",
    color: "black",
    textTransform: "none",
    width: "40%",
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
  }
}));

const NoticeDetail = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const notice_id = useParams()["id"]
  const notice = useSelector(selectNoticeEntities)[notice_id]
  const onDelete = () => {
    dispatch(deleteNotice(notice._id))
    history.push({ pathname: "/Noticeboard"});
  }
  const onUpdate = () =>{
    history.push({ pathname: `/UpdateNotice/${notice_id}`});
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <div className={classes.events}>{notice.title}</div>
        <Grid container spacing={5} className={classes.cardss}>
          <Grid item lg={8} xs={8}>
              <Card sx={{ maxWidth: 300}}>
                  <CardActions>
                  <Typography style={{ color: 'black', fontSize: '18px', display: 'flex',textAlign:'center', justifyContent: 'center',lineHeight:'30px', padding:'15px' }}>
                      {notice.subject}    

                    </Typography>
                </CardActions>
                <CardActions>
                  <Link className={classes.links} style={{ "margin-left": "50%" }}>
                    <button className={classes.buttonone} onClick={onUpdate}>Edit</button>
                  </Link>
                  <Link className={classes.links}>
                    <button className={classes.buttonone} onClick={onDelete}>Delete</button>
                  </Link>

                </CardActions>
              </Card>
          </Grid>
          </Grid>
      </Grid>
    </div>)
}
export default NoticeDetail;
