import { configureStore } from "@reduxjs/toolkit";
import noticesReducer from "../slices/noticesSlice";
import employeesReducer from "../slices/employeeSlice";
import payrollReducer from "../slices/payrollSlice";

const store = configureStore({
    reducer: {
        notices: noticesReducer,
        employees: employeesReducer,
        payrolls: payrollReducer
    }
})

export default store;