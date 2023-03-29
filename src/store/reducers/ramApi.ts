import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IChar} from "../../models/models";

let allChars = (id:number) => {
    let str: string = ''
    for(let i=1; i<=id; i++){
        if (i!==id){
            str = str + i + ','
        }else {
            str = str + i
        }
    }
    return str
}

export const ramApi = createApi({
    reducerPath: 'ram/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api/'
    }),
    endpoints: build => ({
        searchChars: build.query<IChar[], number>({
            query: (id: number) => `character/${allChars(id)}`
        })
    })
})

export const {useSearchCharsQuery} = ramApi
