import { configureStore } from "@reduxjs/toolkit";
import noticesReducer from "../slices/noticesSlice";

const store = configureStore({
    reducer: {
        notices: noticesReducer
    }
})

export default store;