

import React, { useState, useEffect } from "react";
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
import axios from "../../axios";

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
  const [employess, setEmployees] = useState([])

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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'api/v1/employee'
      );

      setEmployees(result.data.data.internalNot);
    };

    fetchData();
  }, []);

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
        {employess.map((employee) => (
          <TableRow key={employee.name}>
            <TableCell component="th" scope="row">
              {employee.firstName}
            </TableCell>
            <TableCell>{employee.position}</TableCell>
            <TableCell>{employee.salary}</TableCell>
            <TableCell  
            
            >
              <FormControl 
              variant="outlined"
              className={classes.dropdownItem}
              
              >
                <Select
                  value={employee.status}
                  className={classes.dropdownItem}
                  onChange={(e) => {
                    handleStatusChange(e, employee.name);
                  }}
                  displayEmpty
                >
                  <MenuItem value="">
                    <em>{employee.status}</em>
                  </MenuItem>
                  <MenuItem value="Paid">Un Paid</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                  <MenuItem value="Cutoff">Cutoff</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
            <TableCell>
              <FormControl>
              
                <TextField
              
                  
                  placeholder="mrrrrrrrr"
                  rows={4}
                  variant="outlined"
                  value={employee.evaluation}
                  onChange={(e) => {
                    onDescriptionChanged(e, employee.name);
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
