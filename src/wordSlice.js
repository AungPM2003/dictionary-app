import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    word:"",
    font:"sans"
}

const wordSlice = createSlice({
    name:"word",
    initialState,
    reducers:{
        updateFont(state,action){
            state.font = action.payload
        },
        updateWord(state,action){
            state.word = action.payload
        }
    }
})
export const {updateFont,updateWord} = wordSlice.actions;
export default wordSlice.reducer;

export const getFont = (state) => state.word.font;
export const getWord = (state) => state.word.word;