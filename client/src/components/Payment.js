// import React, { useState } from 'react';

// const Payment = () => {
//   const [status, setStatus] = useState('paid');

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Position</th>
//           <th>Salary</th>
//           <th>Status</th>
//           <th>Evaluation</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>John Doe</td>
//           <td>Manager</td>
//           <td>$100,000</td>
//           <td>
//             <select value={status} onChange={e => setStatus(e.target.value)}>
//               <option value="paid">Paid</option>
//               <option value="rejected">Rejected</option>
//               <option value="cutoff">Cutoff</option>
//             </select>
//           </td>
//           <td>Good</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// export default Payment;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles(theme => ({
  dropdownItem: {

    backgroundColor: 'white',
    width:'80%',
    '&:hover': {
      backgroundColor: theme.palette.secondary.white,
    },
  },
  lower:{
    display:'flex',
    justifyContent:'flex-end',
   
    alignContent:'center',
  },
  buttonone:{
    paddingLeft: "5px",
    paddingRight: "15px",
    background: "#FFE061",
  
    border: "2px solid white",
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    
    paddingInline:'50px',
    borderRadius: "10px",
    paddingTop:'10px',
    paddingBottom:'15px',
    margin: "15px",
    
  
    color: "black",
    textTransform: "none",
    width: "100%",
   fontSize:'18px',
  },
  header:{
    backgroundColor: '#F3F6F9',

  },
  links:{
    textDecoration:'none'
  },

  tables:{
    color:'white',
  }
}));



const data = [
  {
    name: "John Doe",
    position: "Manager",
    salary: "$100,000",
    status: "Paid",
    evaluation: "Excellent",
  },
  {
    name: "Jane Doe",
    position: "Developer",
    salary: "$80,000",
    status: "Rejected",
    evaluation: "Good",
  },
  {
    name: "Jim Brown",
    position: "Designer",
    salary: "$70,000",
    status: "Cutoff",
    evaluation: "Average",
  },
];

const Payment = () => {
  const classes = useStyles();
  const [users, setUsers] = useState(data);

  const handleStatusChange = (event, name) => {
    const newUsers = users.map((user) => {
      if (user.name == name) user.status = event.target.value;

      return user;
    });
    setUsers(newUsers);
  };

  const onDescriptionChanged = (event,evaluation)=>{
    const newUserss = users.map((user) => {
      if (user.evaluation == evaluation) user.status = event.target.value;

      return user;
    });
    setUsers(newUserss);
  }

  return (
   <div>

     <div className="upper">
     <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.header}>
          <TableCell>Name</TableCell>
          <TableCell>Position</TableCell>
          <TableCell>Salary</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Evaluation</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell>{row.position}</TableCell>
            <TableCell>{row.salary}</TableCell>
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
                  displayEmpty
                >
                  <MenuItem value="">
                    <em>{row.status}</em>
                  </MenuItem>
                  <MenuItem value="Paid">Un Paid</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                  <MenuItem value="Cutoff">Cutoff</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
            <TableCell>
              {/* <FormControl>
                
              </FormControl>
              
              {row.evaluation} */}
              <FormControl>
              
                <TextField
              
                  
                  placeholder="mrrrrrrrr"
                  rows={4}
                  variant="outlined"
                  value={row.evaluation}
                  onChange={(e) => {
                    onDescriptionChanged(e, row.name);
                  }}
                />
              
              </FormControl>
              
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
     </div>
     <br></br>
    <div className={classes.lower}>
      
    <Link className={classes.links} to="/readmore">
         <button className={classes.buttonone}>Save</button>
    </Link>

    <Link className={classes.links} to="/addemployee" style={{marginLeft:'15px'}}>
         <button className={classes.buttonone} >Register Employee</button>
    </Link>
    </div>
      
   </div>
    
    

  );
};
export default Payment;
