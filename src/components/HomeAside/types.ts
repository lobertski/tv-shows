export  interface IShowList {
    20 : Array<IShow> | any,
    21 : Array<IShow> | any,
    22 : Array<IShow> | any,
    23 : Array<IShow> | any,
}

export interface IShow {
    airtime? : string,
    show? : {
        name : string,
        network: string,
        type: string
    }
}

