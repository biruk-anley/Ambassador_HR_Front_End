import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const evaluationAdapter = createEntityAdapter({
    selectId: (e) => e._id
})

const initialState = evaluationAdapter.getInitialState({
  status: 'idle',
})

// Thunks
export const fetchEvaluation = createAsyncThunk('evaluation/fetchevaluation', async () => {
    const response = await axios.get("/api/v1/evaluation")
    return response.data
  })

export const saveNewEvaluation = createAsyncThunk(
  'evaluation/saveNewEvaluation',
  async (evaluation) => {
    const response = await axios.post("api/v1/evaluation", evaluation )
    console.log(response.data.data)
    return response.data.data
  }
)

export const deleteEvaluation = createAsyncThunk(
    'evaluation/deleteEvaluation',
    async (evaluation_id) => {
        const response = await axios.delete(`api/v1/evaluation/${evaluation_id}`)
        return response.data.data._id
    }
)

export const updateEvaluation = createAsyncThunk(
    'evaluation/updateEvaluation',
    async (evaluation) => {
      console.log(evaluation, "employe")
        const response = await axios.patch(`api/v1/evaluation/${evaluation._id}`, evaluation)
        return response.data.data
    }
)

export const selectevaluationEntities = (state) => state.evaluation.entities

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

