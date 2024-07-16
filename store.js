import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./src/wordSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dictionaryApi } from "./src/service/dictionaryApi";

const store = configureStore({
    reducer:{
        [dictionaryApi.reducerPath]:dictionaryApi.reducer,
        word:wordSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dictionaryApi.middleware),

});
setupListeners(store.dispatch)

export default store;