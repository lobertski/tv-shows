export default interface IShow  {
    name : string,
    type : string,
    genres : string[],
    status : string,
    premiered : string,
    ended : string
    image : {medium : string},
    summary : string,
    webChannel : string,
    network : {name : string, officialSite : string},
    schedule : {time : string, days: string[]}
}