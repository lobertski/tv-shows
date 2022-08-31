import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getShows } from "../../../api/getShowsRequest";

const initialState = {show : {}}
export const fetchShowById = createAsyncThunk('shows/getShowByID', async(id : number) => {
    try {
        const payload = await getShows(`shows/${id}`)
        return payload.data ?? []
    } catch (error) {
        return error
        
    }
})

const descriptionSlice = createSlice({
    name : "shows",
    initialState,
    reducers : {},
    extraReducers(builder) {
        builder.addCase(fetchShowById.pending, (state : typeof initialState, action :  Record<string, any>) => {state.show = action.payload})
        builder.addCase(fetchShowById.fulfilled, (state: typeof initialState, action : Record<string, any>) => {state.show = action.payload})
    },

})


export default descriptionSlice.reducer