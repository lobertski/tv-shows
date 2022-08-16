import axios from 'axios'

export const getShows = axios.create({baseURL : "https://api.tvmaze.com/" })