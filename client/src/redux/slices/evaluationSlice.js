import { createSlice, createEntityAdapter, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "../../axios";

const evaluationAdapter = createEntityAdapter({
    selectId: (e) => e._id
})

const initialState = evaluationAdapter.getInitialState({
  status: 'idle',
})

// Thunks
export const fetchEvaluation = createAsyncThunk('evaluation/fetchevaluation', async () => {
    const response = await axios.get(`/api/v1/evaluation/`)
    return response.data
  })

export const saveNewEvaluation = createAsyncThunk(
  'evaluation/saveNewEvaluation',
  async (evaluation) => {
    const response = await axios.post("api/v1/evaluation", evaluation)
    return response.data
  }
)

export const deleteEvaluation = createAsyncThunk(
    'evaluation/deleteEvaluation',
    async (evaluation_id, formId) => {
        const response = await axios.delete(`api/v1/evaluation/${evaluation_id}/${formId}`)
        return response.data.data._id
    }
)

export const updateEvaluation = createAsyncThunk(
    'evaluation/updateEvaluation',
    async (evaluation_obj) => {
      const response = await axios.patch(`api/v1/evaluation/${evaluation_obj["evaluation"]._id}/${evaluation_obj["form_id"]}`, evaluation_obj["evaluation"])
      return response.data.data
    }
)

export const selectevaluationEntities = (state) => state.evaluation.entities
export const selectEvaluationEntitiesById = evaluationId => createSelector(
  selectevaluationEntities,
  forms => Object.values(forms).filter(form => form._id === evaluationId)
)
export const selectEvaluationEntitiesByFormId = formId => createSelector(
  selectevaluationEntities,
 forms => Object.values(forms).filter(form => form.formId === formId)
)

const evaluationSlice = createSlice({
    name: "evaluation",
    initialState,
    reducers: {

    },extraReducers: (builder) => {
        builder
          .addCase(fetchEvaluation.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchEvaluation.fulfilled, (state, action) => {
            evaluationAdapter.setAll(state, action.payload)
            state.status = 'idle'
          })
          .addCase(saveNewEvaluation.fulfilled, evaluationAdapter.addOne)
          .addCase(deleteEvaluation.fulfilled, evaluationAdapter.removeOne)
          .addCase(updateEvaluation.fulfilled, evaluationAdapter.upsertOne)
      },
})

export const { evaluationLoading, evaluationLoaded, evaluationAdded, evaluationDeleted, evaluationUpdated } = evaluationSlice.actions;
export default evaluationSlice.reducer;

