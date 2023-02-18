import React ,{useState, useLocation }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@mui/material/CardActions';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import axios from '../../axios';
import { useHistory } from "react-router-dom";





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    padding: theme.spacing(2),
  },
  cardd: {
    border:'1px solid red',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
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
    marginLeft: "205px",
   
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
  },
}));

const data = [
  {
    name: "Be Punctual",
    status: "Fair",
  },
  {
    name: "Figure out Problems and solve them accordingly",
    status: "Good",
    
  },
  {
    name: "Decession making and Managemenet",
    status: "Very Good",
 
  },
  {
    name: "Problem solving and critical thinking",
    status: "Excellent",
 
  },
];
const EvaluationDetail = () => {
  const classes = useStyles();
  const [users, setUsers] = useState(data);

  const handleStatusChange = (event, name) => {
    const newUsers = users.map((user) => {
      if (user.name == name) user.status = event.target.value;

      return user;
    });
    setUsers(newUsers);
  };

 
  

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <div className={classes.events}>Evaluation Descriptions</div>
        <Grid container spacing={5} className={classes.cardss}>
          <Grid item lg={8} xs={8}>
              <Card sx={{ maxWidth: 300}} >
                  <CardContent>
                    <Typography style={{ color: 'black', fontSize: '20px', display: 'flex', justifyContent: 'center', fontWeight: '900' }}>
                      EvaluationDetail Page
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Typography style={{ color: 'black', fontSize: '18px', display: 'flex',textAlign:'center', justifyContent: 'center',lineHeight:'30px', padding:'15px' }}>
                       and be there on time
                      There will be a meeting on salary  compensation and be there on time    
                    </Typography>
                </CardActions>
                

                <div className="upper">
                <Table className={classes.table}>
                <TableHead>
                  <TableRow className={classes.header}>
                    <TableCell>Questions...</TableCell>
                    <TableCell>Review</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell  
                      
                      >
                        <FormControl 
                        variant="outlined"
                        className={classes.dropdownItem}
                        
                        >
                          <Select
                            value={row.status}
                            className={classes.dropdownItem}
                            onChange={(e) => {
                              handleStatusChange(e, row.name);
                            }}
                          
                          >
                            <MenuItem value="">
                              <em>{row.status}</em>
                            </MenuItem>
                            <MenuItem value="Fair">Fair</MenuItem>
                            <MenuItem value="Good">Good</MenuItem>
                            <MenuItem value="Very Good">Very Good</MenuItem>
                            <MenuItem value="Excellent">Excellent</MenuItem>

                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        
                        
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                </Table>
                </div>
                <Link className={classes.links} to="/readmore">
                  <button className={classes.buttonone} >Save</button>
              </Link>
              </Card>
          </Grid>
          

            
          </Grid>
      </Grid>
    </div>)
}
export default EvaluationDetail;


