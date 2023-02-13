


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import { Link } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const positions = [
  'CEO',
  'Fianance',
  'Accountant',
  'Program manager',
  'Sales and Marketing',
  'Human Resource',
  'Marketing',
  'Marketing Assistant',
  'Deriving',
  'Information Technlogy',
];
const names = [
    'Helen Aregay',
    'Samson Kebed',
    'Alemayehu Demeke',
    'Samrawit Fkru',
    'Omar Mohamed',
    'Abebe Mekuanint',
    'Degsew Abate',
    'Befrdu Solomon',
    
  ];

function getStyles(position, personPosition, theme) {
  return {
    fontWeight:
      personPosition.indexOf(position) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}




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
    left: '620px',
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
    
    background: "#FFE061",
    paddingTop: "8px",
    border:'1px solid white',
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom: "10px",
    borderRadius: "5px",
    position:'relative',
    left:'75%',
   
    marginBottom: "7px",
    color: "black",
    textTransform: "none",
    width: "20%",
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



const AddNotice = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [personPosition, setpersonPosition] = React.useState([]);

  const handleChange = (event) => {
  const {
    target: { value },
  } = event;
  setpersonPosition(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};

const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

const [personName, setPersonName] = React.useState([]);

  const handleChanges = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



  return (
    
    <div className={classes.root}>
      <Grid container spacing={3}>
        <div className={classes.events}>Add Notices</div>
        <Grid container spacing={5} className={classes.cardss}>
          <Grid item lg={8} xs={8}>
              <Card sx={{ maxWidth: 300}}>
                  <CardContent>
                    
                  </CardContent>
                  <CardActions>
                    <Typography style={{ color: 'black', fontSize: '18px', display: 'flex',textAlign:'center', justifyContent: 'center',lineHeight:'30px', padding:'15px' }}>
                      Title 
                    </Typography>
                        <Box
                            sx={{
                                width: 730,
                                maxWidth: '100%',
                                paddingLeft:"58px"
                                
                            }}
                            >
                            <TextField fullWidth  id="fullWidth" variant="outlined" placeholder='There will be a meeting on Salary'/>
                        </Box>
                </CardActions>

                <CardActions>
                    <Typography style={{ color: 'black', fontSize: '18px', display: 'flex',textAlign:'center', justifyContent: 'center',lineHeight:'30px', padding:'15px' }}>
                      Description 
                    </Typography>
                        <Box
                            sx={{
                                width: 670,
                                maxWidth: '100%',
                                
                                
                            }}
                            >
                            <TextField fullWidth  id="fullWidth" multiline rows="4" variant="outlined" placeholder='The meeting includes sales and accountat'/>
                        </Box>
                </CardActions>

                



                {/* voter position */}




                 


                <CardActions>

                
              
                
            </CardActions>
            <Link className={classes.links} to="/VoteDetail">
                 <button className={classes.buttonone}>Add</button>
              </Link>
              </Card>
          </Grid>
          

            
          </Grid>
      </Grid>

      <Grid>
        <div>
        
      </div>
      </Grid>
    </div>)
}
export default AddNotice;

