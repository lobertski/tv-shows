export default interface IShows {
    name : string,
    id : number,
    summary : any,
    image : {medium : string, original : string}
    show : {image :{medium : string}, name : string, type : string, weight :number}
}