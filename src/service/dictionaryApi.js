import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



export const dictionaryApi = createApi({
    reducerPath:'dictionaryApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.dictionaryapi.dev/api/v2/entries/en/'}),
    endpoints:(builder) => ({
        getDefinitionByWord:builder.query({
            query:(word) => `${word}`,
        })
    })
})

export const {useGetDefinitionByWordQuery} = dictionaryApi;