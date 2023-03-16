import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";
import NavTabs from "./components/NavTabs";
import LoginRegister from "./pages/Authentication/Login";
import NoticeBoard from "./pages/NoticeBoard/NoticeBoard";
import AddEmployee from './pages/Employee/AddEmployee';
import UpperFooter from "./components/UpperFooter";
import Employee from "./pages/Employee/Employees";
import noticeDetail from "./pages/NoticeBoard/DetailNotice";
import Vote from "./pages/Vote/Vote";
import EvaluationForm from "./pages/EvaluationForm/Evaluation";
import EvaluationFormDetail from "./pages/EvaluationForm/EvaluationDetail";
import VoteDetail from './pages/Vote/VoteDetail';
import AddEvaluation from './pages/EvaluationForm/AddEvaluation';
import AddVote from './pages/Vote/AddVote'
import AddNotice from "./pages/NoticeBoard/AddNotice";
import UpdateNotice from "./pages/NoticeBoard/UpdateNotice";
import Employees from "./pages/Employee/Employees";
import Evaluation from "./pages/Evaluation/Evaluation";
import EvaluationDetail from "./pages/Evaluation/EvaluationDetail";
import UpdateEmployee from "./pages/Employee/UpdateEmployee";

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
          <Route path="/NoticeDetail/:id" component={noticeDetail} />
          <Route path='/AddNotice' component={AddNotice} />
          <Route path='/UpdateNotice/:id' component={UpdateNotice} />

          <Route path="/Vote" component={Vote} />
          <Route path="/VoteDetail" component={VoteDetail} />
          <Route path="/AddVote" component={AddVote} />


          <Route path="/EvaluationForm" component={EvaluationForm} />
          <Route path="/EvaluationFormDetail" component={EvaluationFormDetail} />
          <Route path="/AddEvaluationForm" component={AddEvaluation} />


          <Route path="/Evaluation" component={Evaluation} />
          <Route path="/EvaluationDetail" component={EvaluationDetail} />

          <Route path="/Employees" component={Employees} />
          <Route path="/AddEmployee" component={AddEmployee} />
          <Route path="/UpdateEmployee/:id" component={UpdateEmployee} />
        </Container>
      </BrowserRouter>
      <UpperFooter></UpperFooter>

    </div>
  );
}

export default App;
