import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { sectionHomeReducer } from "../components/HomeSection/PopularShows/redux-slice";
import { upcomingShowsReducer } from "../components/HomeSection/UpcomingSeries/redux-slice";

export const store = configureStore({reducer : {popular_shows : sectionHomeReducer, upcoming_shows : upcomingShowsReducer} })
export type AppDispatch = typeof store.dispatch