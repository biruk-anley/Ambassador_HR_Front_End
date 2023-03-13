import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const payrollsAdapter = createEntityAdapter({
    selectId: (e) => e.employeeId
})

const initialState = payrollsAdapter.getInitialState({
  status: 'idle',
})

// Thunks
export const fetchPayrolls = createAsyncThunk('payrolls/fetchPayrolls', async () => {
    const response = await axios.get("api/v1/payroll")
    return response.data
  })

export const saveNewPayroll = createAsyncThunk(
  'payrolls/saveNewPayroll',
  async (payroll) => {
    const response = await axios.post("api/v1/payroll", Object.values(payroll))
    return response.data
  }
)

export const deletePayroll = createAsyncThunk(
    'payrolls/deletePayroll',
    async (payroll_id) => {
        const response = await axios.delete(`api/v1/payroll/${payroll_id}`)
        return response
    }
)

export const updatePayroll = createAsyncThunk(
    'payrolls/updatePayroll',
    async (payroll) => {
        const response = await axios.patch("api/v1/payroll", payroll)
        return response
    }
)

export const selectPayrollEntities = (state) => state.payrolls.entities

const payrollsSlice = createSlice({
    name: "payrolls",
    initialState,
    reducers: {

    },extraReducers: (builder) => {
        builder
          .addCase(fetchPayrolls.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchPayrolls.fulfilled, (state, action) => {
            payrollsAdapter.setAll(state, action.payload)
            state.status = 'idle'
          })
          .addCase(saveNewPayroll.fulfilled, payrollsAdapter.addOne)
          .addCase(deletePayroll.fulfilled, payrollsAdapter.removeOne)
          .addCase(updatePayroll.fulfilled, payrollsAdapter.updateOne)
      },
})

export const { payrollsLoading, payrollsLoaded, payrollAdded, payrollDeleted, payrollUpdated } = payrollsSlice.actions;
export default payrollsSlice.reducer;

