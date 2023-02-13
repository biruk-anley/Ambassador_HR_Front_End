import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";
import NavTabs from "./components/NavTabs";
import LoginRegister from "./pages/Authentication/Login";
import NoticeBoard from "./pages/NoticeBoard/NoticeBoard";
import AddEmployee from './pages/AddEmployee/AddEmployee'
import UpperFooter from "./components/UpperFooter";
import Employee from "./pages/Employee/Employees";
import readMore from "./pages/NoticeBoard/DetailNotice";
import Vote from "./pages/Vote/Vote";
import Evaluation from "./pages/Evaluation/Evaluation";
import EvaluationDetail from "./pages/Evaluation/EvaluationDetail";
import VoteDetail from './pages/Vote/VoteDetail';
import AddEvaluation from './pages/Evaluation/AddEvaluation';
import AddVote from './pages/Vote/AddVote'
import AddNotice from "./pages/NoticeBoard/AddNotice";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
  },
  mainParts: {
    paddingTop: "150px",
  },
}));

function App() {
  
  const [sideBar, setSideBar] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavTabs
          // getToken={this.getToken}
          sideBar={sideBar}
        />
        <Container className={classes.mainParts} maxWidth={"xl"}>
          <Route path="/" exact>
            {" "}
            <LoginRegister
              setSideBar={setSideBar}
            />
          </Route>        
          <Route path="/Noticeboard" component={NoticeBoard} />
          <Route path="/ReadMore" component={readMore} />
          <Route path='/AddNotice' component={AddNotice}/>

          <Route path="/Vote" component={Vote}/>
          <Route path="/VoteDetail" component={VoteDetail} />
          <Route path="/AddVote" component={AddVote} />
          

          <Route path="/Evaluation" component={Evaluation} />
          <Route path="/EvaluationDetail" component={EvaluationDetail} />
          <Route path="/AddEvaluation" component={AddEvaluation} />

          
          <Route path="/Employee" component={Employee} />
          <Route path="/addEmployee" component={AddEmployee} />
        </Container>
      </BrowserRouter>
      <UpperFooter></UpperFooter>
     
    </div>
  );
}

export default App;
