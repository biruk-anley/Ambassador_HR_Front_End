import { createSlice, createEntityAdapter, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "../../axios";

const votesAdapter = createEntityAdapter({
    selectId: (e) => e._id
})

const initialState = votesAdapter.getInitialState({
  status: 'idle',
})

// Thunks
export const fetchVotes = createAsyncThunk('votes/fetchVotes', async () => {
    const response = await axios.get("api/v1/poll")
    return response.data.data.internalNot
  })

export const saveNewVote = createAsyncThunk(
  'votes/saveNewVote',
  async (vote) => {
    const response = await axios.post("api/v1/poll", vote )
    return response.data.data
  }
)

export const deleteVote = createAsyncThunk(
    'votes/deleteVote',
    async (vote_id) => {
        const response = await axios.delete(`api/v1/poll/${vote_id}`)
        return response
    }
)

export const updateVote = createAsyncThunk(
    'votes/updateVote',
    async (vote) => {
        const response = await axios.patch(`api/v1/poll/${vote._id}`, vote)
        return response
    }
)

export const selectVoteEntities = (state) => state.votes.entities
export const selectPollsEntitiesByVoterPosition = (voter_id) => createSelector(
  selectVoteEntities, 
  polls => Object.values(polls).filter(poll => voter_id in poll.voterPositions)
)

const votesSlice = createSlice({
    name: "votes",
    initialState,
    reducers: {

    },extraReducers: (builder) => {
        builder
          .addCase(fetchVotes.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchVotes.fulfilled, (state, action) => {
            votesAdapter.setAll(state, action.payload)
            state.status = 'idle'
          })
          .addCase(saveNewVote.fulfilled, votesAdapter.addOne)
          .addCase(deleteVote.fulfilled, votesAdapter.removeOne)
          .addCase(updateVote.fulfilled, votesAdapter.updateOne)
      },
})

export const { votesLoading, votesLoaded, voteAdded, voteDeleted, voteUpdated } = votesSlice.actions;
export default votesSlice.reducer;

