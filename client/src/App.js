import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Container, withStyles, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import NavTabs from "./components/NavTabs";

import AddHouse from './pages/AddEmployee/AddEmployee'

/*import LoginRegister from './pages/Authentication/LoginRegister'*/
//comment
import LoginRegister from "./pages/Authentication/Login";
import NoticeBoard from "./pages/NoticeBoard";
import RegisterHouse from "./pages/AddEmployee/AddEmployee";



import UpperFooter from "./components/UpperFooter";
import Employee from "./pages/Employees";
import readMore from "./pages/DetailNotice";
import Vote from "./pages/Vote";




const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
  },
  mainParts: {
    paddingTop: "150px",
  },
}));

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    token: "",
    searchKeyword: "",
    isAdmin: false,
  });

  const [sideBar, setSideBar] = useState(false);
  const classes = useStyles();

 

  const isAdmin = () => {
    const tokenString = localStorage.getItem("admin");
    const user = tokenString ? JSON.parse(tokenString) : false;
    if (user) {
      return user.isAdmin;
    } else {
      return false;
    }
  };

  return (
    <div className={classes.root}>
      
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavTabs
          // getToken={this.getToken}
          sideBar={sideBar}
          isAdmin={isAdmin}
        />
        <Container className={classes.mainParts} maxWidth={"xl"}>
          <Route path="/" exact>
            {" "}
            <LoginRegister
              setSideBar={setSideBar}
              // setToken={setToken}
              // getToken={getToken}
            />
          </Route>
          
         
        
          
          {/* <Route path="/login" exact>
            {" "}
            <LoginRegister
              setSideBar={setSideBar}
              // setToken={setToken}
              // getToken={getToken}
            />
          </Route> */}



       
          
          
        
          <Route path="/Noticeboard" component={NoticeBoard} />
          <Route path="/ReadMore" component={readMore} />
          <Route path="/Vote" component={Vote}/>

          <Route path="/Employee" component={Employee} />
          <Route path="/addhouse">
            {" "}
            <RegisterHouse
              setSideBar={setSideBar}
              // getToken={getToken}
            />
          </Route>
         
          <Route path="/addEmployee" component={AddHouse} />
        </Container>
      </BrowserRouter>
      <UpperFooter></UpperFooter>
     
    </div>
  );
}

export default App;
