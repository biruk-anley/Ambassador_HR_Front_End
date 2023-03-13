

import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
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

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, fetchEmployees, selectEmployeeEntities } from "../../redux/slices/employeeSlice";
import { saveNewPayroll, selectPayrollEntities, updatePayroll, fetchPayrolls } from "../../redux/slices/payrollSlice";

const useStyles = makeStyles(theme => ({
  dropdownItem: {

    backgroundColor: 'white',
    width: '80%',
    '&:hover': {
      backgroundColor: theme.palette.secondary.white,
    },
  },
  lower: {
    display: 'flex',
    justifyContent: 'flex-end',

    alignContent: 'center',
  },
  buttonone: {
    paddingLeft: "5px",
    paddingRight: "15px",
    background: "#FFE061",

    border: "2px solid white",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    paddingInline: '50px',
    borderRadius: "10px",
    paddingTop: '10px',
    paddingBottom: '15px',
    margin: "15px",


    color: "black",
    textTransform: "none",
    width: "100%",
    fontSize: '18px',
  },
  buttononeE: {
    background: "#FFE061",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '5px',
    borderRadius: "10px",
    marginBottom: "5px",
    color: "black",
    textTransform: "none",
    width: "100%",
    fontSize: '18px',
  },
  whyWide: {
    marginLeft: "-100px",
  },
  header: {
    backgroundColor: '#F3F6F9',

  },
  links: {
    textDecoration: 'none'
  },

  tables: {
    color: 'white',
  }
}));



const Employees = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const employees = Object.values(useSelector(selectEmployeeEntities));
  let fetchedPayrolls = useSelector(selectPayrollEntities);
  const fetchedNPayrolls = useSelector(selectPayrollEntities);
  const [payrolls, setPayrolls] = useState(fetchedPayrolls);
  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchPayrolls())
  }, []);
  const onUpdate = employee_id => event => {
    event.preventDefault();
    history.push({ pathname: `/UpdateEmployee/${employee_id}` })
  }

  const onDelete = employee_id => event => {
    event.preventDefault();
    dispatch(deleteEmployee(employee_id))
  }

  const onStatusChange = (employee_id) => async event => {
    if(employee_id in payrolls){
      await setPayrolls({
        ...payrolls,
        [employee_id]: {...payrolls[employee_id], status: event.target.value}
      })
    }else{
      await setPayrolls({
        ...payrolls,
        [employee_id]: {employeeId: employee_id, status: event.target.value, description: ""}
      })
    }
    
  }

  const onEvaluationChange = (employee_id) => async event => {
    if(employee_id in payrolls){
      await setPayrolls({
        ...payrolls,
        [employee_id]: {...payrolls[employee_id], description: event.target.value}
      })
    }else{
      await setPayrolls({
        ...payrolls,
        [employee_id]: {employeeId: employee_id, status: "", description: event.target.value}
      })
    }
  }

  const onSave = async event => {
    event.preventDefault();
    let toBeUpdated = [];
    let newPayroll = [];
    for (const [key, value] of Object.entries(payrolls)){
      if(key in fetchedNPayrolls){
        toBeUpdated.push(payrolls[key])
      }else{
        newPayroll.push(payrolls[key])
      }
    };
    dispatch(saveNewPayroll(newPayroll))
    dispatch(updatePayroll(toBeUpdated))
    history({ pathname: '/Employees'})
  }
  
  return (

    <div>

      <div className="upper">
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.header}>
              <TableCell>No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Evaluation</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => (
              
              <TableRow key={employee._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {employee.firstName} {employee.lastName}
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
                      value={payrolls[employee._id] != undefined ?payrolls[employee._id].status:"UNPAID"}
                      className={classes.dropdownItem}
                      onChange={onStatusChange(employee._id)}
                      displayEmpty
                    >
                      <MenuItem value="">
                        <em>{employee.status}</em>
                      </MenuItem>
                      <MenuItem value="UNPAID">UNPAID</MenuItem>
                      <MenuItem value="REJECTED">Rejected</MenuItem>
                      <MenuItem value="CUTOFF">Cutoff</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <FormControl className="whyWide">
                    <TextField
                      placeholder="reason if un paid/ cut off"
                      rows={4}
                      variant="outlined"
                      value={payrolls[employee._id] != undefined ?payrolls[employee._id].description:""}
                      onChange={onEvaluationChange(employee._id)}
                    />

                  </FormControl>

                </TableCell>
                <TableCell>
                  <Button
                    onClick={onUpdate(employee._id)}
                    value="NA"
                    variant="contained"
                    className={classes.buttononeE}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={onDelete(employee._id)}
                    value="NA"
                    variant="contained"
                    className={classes.buttononeE}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <br></br>
      <div className={classes.lower}>

        <Link className={classes.links} to="/readmore">
          <button className={classes.buttonone} onClick={onSave}>Save</button>
        </Link>

        <Link className={classes.links} to="/AddEmployee" style={{ marginLeft: '15px' }}>
          <button className={classes.buttonone} >Register Employee</button>
        </Link>
      </div>

    </div>



  );
};
export default Employees;
