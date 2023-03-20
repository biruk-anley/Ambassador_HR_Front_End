import { createSlice, createEntityAdapter, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "../../axios";

const positionsAdapter = createEntityAdapter({
    selectId: (e) => e._id
})

const initialState = positionsAdapter.getInitialState({
  status: 'idle',
})

// Thunks
export const fetchPositions = createAsyncThunk('positions/fetchPositions', async () => {
    const response = await axios.get("api/v1/position")   
    return response.data
  })

export const saveNewPosition = createAsyncThunk(
  'positions/saveNewPosition',
  async (Position) => {
    const response = await axios.post("api/v1/position", Object.values(Position))
    return response.data
  }
)

export const deletePosition = createAsyncThunk(
    'positions/deletePosition',
    async (position_id) => {
        const response = await axios.delete(`api/v1/position/${position_id}`)
        return response
    }
)

export const updatePosition = createAsyncThunk(
    'positions/updatePosition',
    async (Position) => {
        const response = await axios.patch("api/v1/position", Position)
        return response
    }
)

export const selectPositionEntities = (state) => state.positions.entities
export const selectPositionEntitiesById = (position_id) => createSelector(
  selectPositionEntities, 
  positions => Object.values(positions).filter(position => position._id === position_id)
)
export const selectPositionEntitiesByTitle = (title) => createSelector(
  selectPositionEntities, 
  positions => Object.values(positions).filter(position => position.title === title)
)
const positionsSlice = createSlice({
    name: "positions",
    initialState,
    reducers: {

    },extraReducers: (builder) => {
        builder
          .addCase(fetchPositions.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchPositions.fulfilled, (state, action) => {
            positionsAdapter.setAll(state, action.payload)
            state.status = 'idle'
          })
          .addCase(saveNewPosition.fulfilled, positionsAdapter.addOne)
          .addCase(deletePosition.fulfilled, positionsAdapter.removeOne)
          .addCase(updatePosition.fulfilled, positionsAdapter.updateOne)
      },
})

export const { positionsLoading, positionsLoaded, positionAdded, positionDeleted, positionUpdated } = positionsSlice.actions;
export default positionsSlice.reducer;

