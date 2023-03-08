import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const noticesAdapter = createEntityAdapter({
    selectId: (e) => e._id
})

const initialState = noticesAdapter.getInitialState({
  status: 'idle',
})

// Thunks
export const fetchNotices = createAsyncThunk('notices/fetchNotices', async () => {
    const response = await axios.get("api/v1/internalNotice")
    return response.data.data.internalNot
  })

export const saveNewNotice = createAsyncThunk(
  'notices/saveNewNotice',
  async (notice) => {
    const response = await axios.post("api/v1/internalNotice", notice )
    return response.data.data
  }
)

export const deleteNotice = createAsyncThunk(
    'notices/deleteNotice',
    async (notice_id) => {
        const response = await axios.delete(`api/v1/internalNotice/${notice_id}`)
        return response
    }
)

export const updateNotice = createAsyncThunk(
    'notices/updateNotice',
    async (notice) => {
      console.log(notice, "notice")
        const response = await axios.patch(`api/v1/internalNotice/${notice._id}`, notice)
        return response
    }
)

export const selectNoticeEntities = (state) => state.notices.entities

const noticesSlice = createSlice({
    name: "notices",
    initialState,
    reducers: {

    },extraReducers: (builder) => {
        builder
          .addCase(fetchNotices.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchNotices.fulfilled, (state, action) => {
            noticesAdapter.setAll(state, action.payload)
            state.status = 'idle'
          })
          .addCase(saveNewNotice.fulfilled, noticesAdapter.addOne)
          .addCase(deleteNotice.fulfilled, noticesAdapter.removeOne)
          .addCase(updateNotice.fulfilled, noticesAdapter.updateOne)
      },
})

export const { noticesLoading, noticesLoaded, noticeAdded, noticeDeleted, noticeUpdated } = noticesSlice.actions;
export default noticesSlice.reducer;

