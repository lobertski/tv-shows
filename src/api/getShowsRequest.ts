import axios from 'axios'


// export const getShows = async() => {
//    try {
//       const data =  await axios.get("https://api.tvmaze.com/shows")
//       return data
//    }
//    catch(error) {
//       console.log(error)
//    }
// }

export const getShows = axios.create({baseURL : "https://api.tvmaze.com/" })