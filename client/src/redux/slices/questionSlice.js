import { createSlice, createEntityAdapter, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "../../axios";

const questionsAdapter = createEntityAdapter({
    selectId: (e) => e._id
})

const initialState = questionsAdapter.getInitialState({
  status: 'idle',
})

// Thunks
export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async () => {
    const response = await axios.get("api/v1/question")
    return response.data
  })

export const saveNewQuestion = createAsyncThunk(
  'questions/saveNewQuestion',
  async (question) => {
    const response = await axios.post("api/v1/question", Object.values(question))
    return response.data
  }
)

export const deleteQuestion = createAsyncThunk(
    'questions/deleteQuestion',
    async (question_id) => {
        const response = await axios.delete(`api/v1/question/${question_id}`)
        return response
    }
)

export const updateQuestion = createAsyncThunk(
    'questions/updateQuestion',
    async (question) => {
        const response = await axios.patch("api/v1/question", question)
        return response
    }
)

export const selectQuestionEntities = (state) => state.questions.entities
export const selectQuestionEntitiesById = questionIds => createSelector(
    selectQuestionEntities,
    questions => Object.values(questions).filter(question => questionIds.includes(question._id))
  )
const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {

    },extraReducers: (builder) => {
        builder
          .addCase(fetchQuestions.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchQuestions.fulfilled, (state, action) => {
            questionsAdapter.setAll(state, action.payload)
            state.status = 'idle'
          })
          .addCase(saveNewQuestion.fulfilled, questionsAdapter.addOne)
          .addCase(deleteQuestion.fulfilled, questionsAdapter.removeOne)
          .addCase(updateQuestion.fulfilled, questionsAdapter.updateOne)
      },
})

export const { questionsLoading, questionsLoaded, questionAdded, questionDeleted, questionUpdated } = questionsSlice.actions;
export default questionsSlice.reducer;

