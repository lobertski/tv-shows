import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getShows } from "../../../../api/getShowsRequest";


const initialState = {shows : []}

export const fetchShows = createAsyncThunk('shows/getShows', async () => {
    try {
        const payload = await getShows('shows')
        return payload?.data ?? []
    }
    catch (error) {
        return error
    }
})
const sectionHomeSlice = createSlice({
    name: 'shows',
    initialState,
    reducers : {},
    extraReducers(builder) {
        builder.addCase(fetchShows.pending, (state : any, action :any) => {state.shows = action.payload})
        builder.addCase(fetchShows.fulfilled, (state : any, action :any) => {state.shows = action.payload})
    },
})



export const sectionHomeReducer = sectionHomeSlice.reducer