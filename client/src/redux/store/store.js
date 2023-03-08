import { configureStore } from "@reduxjs/toolkit";
import noticesReducer from "../slices/noticesSlice";
import employeesReducer from "../slices/employeeSlice";

const store = configureStore({
    reducer: {
        notices: noticesReducer,
        employees: employeesReducer
    }
})

export default store;