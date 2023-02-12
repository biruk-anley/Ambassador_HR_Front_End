import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Link } from "react-router-dom";
import bell from '../images/belll.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

const options = [
  { name: "Option 1", value: "option1" },
  { name: "Option 2", value: "option2" },
  { name: "Option 3", value: "option3" },
  { name: "Option 4", value: "option4" }
];

export default function Vote() {
  const classes = useStyles();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = event => {
    setSelectedOptions(prevSelectedOptions => {
      if (prevSelectedOptions.includes(event.target.value)) {
        return prevSelectedOptions.filter(
          option => option !== event.target.value
        );
      } else {
        return [...prevSelectedOptions, event.target.value];
      }
    });
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Select Options</FormLabel>
        {options.map(option => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={selectedOptions.includes(option.value)}
                onChange={handleChange}
                value={option.value}
              />
            }
            label={option.name}
          />
        ))}
      </FormControl>
      <p>Selected Options: {selectedOptions.join(", ")}</p>
      <Link className={classes.links} to="/VoteDetail">
                     <button className={classes.buttonone}>Vote</button>
                  </Link>
      <Grid item lg={4} xs={12}>
          
            
              <Card sx={{ maxWidth: 300}}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={bell}
                    className={classes.imagesb}
                />
                
                  <CardContent>
                    <Typography style={{ color: 'black', fontSize: '20px', display: 'flex', justifyContent: 'center', fontWeight: '900' }}>
                      Voting page
                  </Typography>
                  
                  <Typography style={{ color: 'black', fontSize: '18px', display: 'flex',textAlign:'center', justifyContent: 'center',lineHeight:'30px', padding:'15px' }}>
                      There will be a meeting on salary  compensation and be there on time
                    </Typography>
                  
                  

                  
                  
                  </CardContent>
                  <CardActions>
                  
                    
                </CardActions>
              </Card>
          </Grid>
    </div>
  );
}

// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import FormControl from '@material-ui/core/FormControl';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Radio from '@material-ui/core/Radio';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
// });
// const options = [
//       { name: "Option 1", value: "option1" },
//       { name: "Option 2", value: "option2" },
//       { name: "Option 3", value: "option3" },
//       { name: "Option 4", value: "option4" }
//     ];

// const VotingCard = ({ options, onVote }) => {
//   const classes = useStyles();
//   const [selectedValue, setSelectedValue] = useState(null);

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   const handleVote = () => {
//     if (selectedValue) {
//       onVote(selectedValue);
//     }
//   };

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <FormControl component="fieldset">
//           <RadioGroup aria-label="options" name="options" value={selectedValue} onChange={handleChange}>
//             {options.map((option) => (
//               <FormControlLabel
//                 key={option}
//                 value={option}
//                 control={<Radio />}
//                 label={option}
//               />
//             ))}
//           </RadioGroup>
//         </FormControl>
//         <button onClick={handleVote}>Vote</button>
//       </CardContent>
//     </Card>
//   );
// };

// export default VotingCard;
