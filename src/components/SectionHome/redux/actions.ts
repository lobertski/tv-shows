const getShows = (payload : Record<string, any>) => {
    return {
        type : "get_shows",
        payload
    }
}

export {getShows}