import React, { useEffect, useState } from 'react';
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
import { useHistory, useLocation } from "react-router-dom";
import { selectEvaluationFormEntitiesById } from '../../redux/slices/evaluationFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions, selectQuestionEntitiesById } from '../../redux/slices/questionSlice';
import { selectEmployeeEntities } from '../../redux/slices/employeeSlice';
import { fetchEvaluation, saveNewEvaluation, selectevaluationEntities, selectEvaluationEntitiesByFormId, updateEvaluation } from '../../redux/slices/evaluationSlice';
import { fetchPositions, selectPositionEntities } from '../../redux/slices/positionSlice';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    padding: theme.spacing(2),
  },
  cardd: {
    border: '1px solid red',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  images: {
    width: '75%',

    position: 'relative',
    top: '-120px',
    left: '-10px',
    "@media (max-width:960px)": {
      top: '-570px',
      left: '86px',
      width: '45%',
    },
  },




  imagesb: {
    width: '12rem',
    marginLeft: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  events: {
    fontSize: "3rem",
    position: 'relative',
    top: '-40px',
    left: '520px',
    "@media (max-width:960px)": {

      left: '146px',
      width: '45%',
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

    width: '90%',
    display: 'flex',


    borderRadius: "150px",

    fontSize: '1.5rem'

  },
  cardss_main: {
    marginBottom: "3%"
  },
  upper: {
    marginTop: '500px'
  },
  buttonone: {
    paddingLeft: "15px",
    paddingRight: "15px",
    background: "#FFE061",
    paddingTop: "8px",
    border: "2px solid white",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: "10px",
    borderRadius: "5px",
    marginLeft: "205px",

    marginBottom: "7px",
    color: "black",
    textTransform: "none",
    width: "40%",
    fontSize: '18px',
  },
  textt: {
    color: 'black',
    fontSize: '4rem',
    display: 'flex', alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '900',
    "@media (max-width:960px)": {
      fontSize: '2rem'
    },
  },
  texth: {
    color: 'red',
    fontSize: '28px',
    marginLeft: '55px',
    textAlign: 'center',
    "@media (max-width:960px)": {
      fontSize: '20px',
      marginLeft: '2px', marginTop: '80px'
    },
  },
  textss: {
    fontSize: '20px',
    lineHeight: '27px',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: "15px",
    color: 'black'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));


const EvaluationDetail = () => {

  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchEvaluation());
    dispatch(fetchPositions())
  }, []);
  const fetchedEvaluationForm = useSelector(selectEvaluationFormEntitiesById(location.state.evaluationId));
  const [evaluationForm, setEvaluationForm] = useState(fetchedEvaluationForm);
  const fetchedEvaluation = useSelector(selectEvaluationEntitiesByFormId(evaluationForm[0]._id))
  const fetchedQuestions = useSelector(selectQuestionEntitiesById(evaluationForm[0].questionId))
  const [questions, setQuestions] = useState(fetchedQuestions);
  const fetchedEmployees = useSelector(selectEmployeeEntities);
  const fetchedPositions = useSelector(selectPositionEntities)
  const loggedInUserId = JSON.parse(localStorage.getItem("employee"))._id
  let evaluatedPositions = [];
  let existingEvaluations = {};


  fetchedEvaluationForm[0].evaluatedPositions.forEach(position => {
    Object.values(fetchedEmployees).forEach(employee => {
      if (fetchedPositions[position].title === employee.position) {
        evaluatedPositions.push(employee._id)
      }
    }
    )
  });
  fetchedEvaluation.forEach((evaluation) => {
    existingEvaluations[evaluation.evaluatedId] = evaluation
  })
  

  const [evaluations, setEvaluations] = useState(existingEvaluations)
  const onAnswerChange = (questionId, evaluatedId, formId) => (event) => {
    event.preventDefault()
    if (evaluatedId in evaluations && evaluations[evaluatedId].formId === formId) {
      setEvaluations({
        ...evaluations,
        [evaluatedId]: {
          ...evaluations[evaluatedId],
          result: {
            ...evaluations[evaluatedId].result,
            [questionId]: event.target.value
          },
          savedStatus: "Save"
        }
      })
    } else {
      setEvaluations({
        ...evaluations,
        [evaluatedId]: {
          evaluatorId: loggedInUserId,
          evaluatedId: evaluatedId,
          formId: formId,
          result: {
            [questionId]: event.target.value
          },
          savedStatus: "Save"
        }
      })
    }

  }
  const onSave = (evaluatedId, form_id) => async event => {
    event.preventDefault()
    if (evaluatedId in existingEvaluations && evaluations[evaluatedId].formId === form_id) {
      const _id = evaluations[evaluatedId]._id
      evaluations[evaluatedId] = {
        ...evaluations[evaluatedId],
        _id: _id
      }
      dispatch(updateEvaluation({"evaluation":evaluations[evaluatedId], "form_id":form_id}))
      setEvaluations({
        ...evaluations,
        [evaluatedId]: {
          ...evaluations[evaluatedId],
          savedStatus: "Evaluation updated"
        }
      })
    } else {
      dispatch(saveNewEvaluation(evaluations[evaluatedId], form_id))
      setEvaluations({
        ...evaluations,
        [evaluatedId]: {
          ...evaluations[evaluatedId],
          savedStatus: "Evaluation saved"
        }
      })
    }
  }
  return (
    <div className={classes.root}>
      {evaluatedPositions.map(evaluated => (
        <Grid container spacing={3} className={classes.cardss_main} key={evaluated}>
          <Grid container spacing={5} className={classes.cardss}>
            <Grid item lg={8} xs={8}>
              <Card sx={{ maxWidth: 300 }} >
                <CardContent>
                  <Typography style={{ color: 'black', fontSize: '20px', display: 'flex', justifyContent: 'center', fontWeight: '900' }}>
                    {evaluationForm[0].title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography style={{ color: 'black', fontSize: '18px', display: 'flex', textAlign: 'center', justifyContent: 'center', lineHeight: '30px', padding: '15px' }}>
                    {evaluationForm[0].description}
                  </Typography>

                </CardActions>
                <CardActions><Typography style={{ color: 'black', fontSize: '18px', display: 'flex', textAlign: 'center', justifyContent: 'center', lineHeight: '30px', padding: '15px' }}>
                  Evaluated: {fetchedEmployees[evaluated].firstName} {fetchedEmployees[evaluated].lastName}
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
                      {Object.values(questions).map((question) => (
                        <TableRow key={question._id}>
                          <TableCell component="th" scope="row">
                            {question.description}
                          </TableCell>
                          <TableCell >
                            <FormControl
                              variant="outlined"
                              className={classes.dropdownItem}

                            >
                              <Select
                                // value={row.status}
                                className={classes.dropdownItem}
                                onChange={onAnswerChange(question._id, evaluated, evaluationForm[0]._id)}
                                value={evaluated in evaluations ? evaluations[evaluated].result[question._id] : ""}
                              >
                                {question.answer.map(ans => (
                                  <MenuItem value={ans} key={ans}>{ans}</MenuItem>
                                ))}

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
                <Link className={classes.links} onClick={onSave(evaluated, evaluationForm[0]._id)}>
                  <button className={classes.buttonone}>{evaluated in evaluations ? ("savedStatus" in evaluations[evaluated] ? evaluations[evaluated].savedStatus : "Save") : "Save"}</button>
                </Link>
              </Card>
            </Grid>



          </Grid>
        </Grid>
      ))}
    </div>)
}
export default EvaluationDetail;


