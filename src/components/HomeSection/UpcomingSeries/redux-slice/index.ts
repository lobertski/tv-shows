import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getShows } from "../../../../api/getShowsRequest";


const initialState = {upcoming_shows : []}

export const fetchUpcomingShows = createAsyncThunk('upcoming_shows/getUpcomingShows', async () => {
    try {
        const date = new Date()
        const current_date = {
            month : ( "0" + (date.getMonth() + 1).toString() ).slice(-2) ,
            day : parseFloat(( "0" + date.getDate().toString() ).slice(-2)) ,
            year : date.getFullYear()
        }
        const payload = await getShows(`schedule?country=US&date=${current_date.year}-${current_date.month}-${current_date.day}`)
        return payload?.data ?? []
    }
    catch (error) {
        return error
    }

})
const upcomingShowsSlice = createSlice({
    name: 'upcoming_shows',
    initialState,
    reducers : {},
    extraReducers(builder) {
        builder.addCase(fetchUpcomingShows.pending, (state : any, action :any) => {state.upcoming_shows = action.payload})
        builder.addCase(fetchUpcomingShows.fulfilled, (state : any, action :any) => {state.upcoming_shows = action.payload})
    },
})



export const upcomingShowsReducer = upcomingShowsSlice.reducer