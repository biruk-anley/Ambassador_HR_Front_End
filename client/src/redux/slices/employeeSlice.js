import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const employeesAdapter = createEntityAdapter({
    selectId: (e) => e._id
})

const initialState = employeesAdapter.getInitialState({
  status: 'idle',
})

// Thunks
export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
    const response = await axios.get("/api/v1/employee")
    return response.data
  })

export const saveNewEmployee = createAsyncThunk(
  'employees/saveNewEmployee',
  async (employee) => {
    const response = await axios.post("api/v1/employee", employee )
    console.log(response)
    return response.data.data
  }
)

export const deleteEmployee = createAsyncThunk(
    'employees/deleteEmployee',
    async (employee_id) => {
        const response = await axios.delete(`api/v1/employee/${employee_id}`)
        return response
    }
)

export const updateEmployee = createAsyncThunk(
    'employees/updateEmployee',
    async (employee) => {
        console.log(employee)
        const response = await axios.patch(`api/v1/employee/${employee._id}`, employee)
        return response
    }
)

export const selectEmployeeEntities = (state) => state.employees.entities

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {

    },extraReducers: (builder) => {
        builder
          .addCase(fetchEmployees.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchEmployees.fulfilled, (state, action) => {
            employeesAdapter.setAll(state, action.payload)
            state.status = 'idle'
          })
          .addCase(saveNewEmployee.fulfilled, employeesAdapter.addOne)
          .addCase(deleteEmployee.fulfilled, employeesAdapter.removeOne)
          .addCase(updateEmployee.fulfilled, employeesAdapter.updateOne)
      },
})

export const { employeesLoading, employeesLoaded, employeeAdded, employeeDeleted, employeeUpdated } = employeesSlice.actions;
export default employeesSlice.reducer;

