import { createSlice, createEntityAdapter, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "../../axios";

const evaluationFormAdapter = createEntityAdapter({
    selectId: (e) => e._id
})

const initialState = evaluationFormAdapter.getInitialState({
  status: 'idle',
})

// Thunks
export const fetchEvaluationForm = createAsyncThunk('evaluationForm/fetchevaluationForm', async (employeeId) => {  
  const response = await axios.get(`/api/v1/evaluationForm/employee/${employeeId}`)
    return response.data
  })

export const saveNewEvaluationForm = createAsyncThunk(
  'evaluationForm/saveNewEvaluationForm',
  async (evaluationForm) => {
    const response = await axios.post("api/v1/evaluationForm", evaluationForm )
    return response.data
  }
)

export const deleteEvaluationForm = createAsyncThunk(
    'evaluationForm/deleteEvaluationForm',
    async (evaluationForm_id) => {
        const response = await axios.delete(`api/v1/evaluationForm/${evaluationForm_id}`)
        return response.data.data._id
    }
)

export const updateEvaluationForm = createAsyncThunk(
    'evaluationForm/updateEvaluationForm',
    async (evaluationForm) => {
        const response = await axios.patch(`api/v1/evaluationForm/${evaluationForm._id}`, evaluationForm)
        return response.data.data
    }
)

export const selectevaluationFormEntities = (state) => state.evaluationForm.entities
export const selectEvaluationFormEntitiesById = evaluationFormId => createSelector(
  selectevaluationFormEntities,
  forms => Object.values(forms).filter(form => form._id === evaluationFormId)
)

const evaluationFormSlice = createSlice({
    name: "evaluationForm",
    initialState,
    reducers: {

    },extraReducers: (builder) => {
        builder
          .addCase(fetchEvaluationForm.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchEvaluationForm.fulfilled, (state, action) => {
            evaluationFormAdapter.setAll(state, action.payload)
            state.status = 'idle'
          })
          .addCase(saveNewEvaluationForm.fulfilled, evaluationFormAdapter.addOne)
          .addCase(deleteEvaluationForm.fulfilled, evaluationFormAdapter.removeOne)
          .addCase(updateEvaluationForm.fulfilled, evaluationFormAdapter.upsertOne)
      },
})

export const { evaluationFormLoading, evaluationFormLoaded, evaluationFormAdded, evaluationFormDeleted, evaluationFormUpdated } = evaluationFormSlice.actions;
export default evaluationFormSlice.reducer;

