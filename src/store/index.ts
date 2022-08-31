import { configureStore, combineReducers } from "@reduxjs/toolkit";
import descriptionSlice from "../components/Description/redux-slice";
import { sectionHomeReducer } from "../components/HomeSection/PopularShows/redux-slice";
import { upcomingShowsReducer } from "../components/HomeSection/UpcomingSeries/redux-slice";

export const store = configureStore({reducer : {popular_shows : sectionHomeReducer, upcoming_shows : upcomingShowsReducer, show_by_id : descriptionSlice} })
export type AppDispatch = typeof store.dispatch