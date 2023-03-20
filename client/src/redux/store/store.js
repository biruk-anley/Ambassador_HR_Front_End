import { configureStore } from "@reduxjs/toolkit";
import noticesReducer from "../slices/noticesSlice";
import employeesReducer from "../slices/employeeSlice";
import payrollReducer from "../slices/payrollSlice";
import evaluationFormReducer from '../slices/evaluationFormSlice';
import questionReducer from "../slices/questionSlice";
import evaluationReducer from "../slices/evaluationSlice";
import positionReducer from "../slices/positionSlice";
import voteReducer from "../slices/voteSlice";

const store = configureStore({
    reducer: {
        notices: noticesReducer,
        employees: employeesReducer,
        payrolls: payrollReducer,
        evaluationForm: evaluationFormReducer,
        questions: questionReducer,
        evaluation: evaluationReducer,
        positions: positionReducer,
        votes: voteReducer
    }
})

export default store;