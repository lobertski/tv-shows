import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { sectionHomeReducer } from "../components/SectionHome/redux-slice";

const root_reducer = combineReducers({sectionHomeReducer})
export const store = configureStore({reducer : root_reducer })
export type AppDispatch = typeof store.dispatch