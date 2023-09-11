import { createSlice } from "@reduxjs/toolkit";

const vsCodeSlice = createSlice({
    name: 'vsCode',
    initialState: {
        theme: 'Dracula',
        lang: 'python',
        fontSize: 18,
        storeCodeCurrent:"",
    },
    reducers: {
        setTheme: (state, valTheme) => {
            return {
                ...state,
                theme: valTheme.payload
            }
        },
        setLang: (state, valLang) => {
            // console.log(valLang)
            // Ví dụ: => {type: 'vsCode/setLang', payload: 'java'}
            return {
                ...state,
                lang: valLang.payload
            }
        },
        setFontSize: (state, valFontSize) => {
            return {
                ...state,
                fontSize: valFontSize.payload
            }
        },
        setStoreCodeCurrent: (state, valStoreCodeCurrent) => {
            return {
                ...state,
                storeCodeCurrent: valStoreCodeCurrent.payload
            }
        }
    }
})

// Set up: action, reducer
const { actions, reducer } = vsCodeSlice
export const { setTheme, setFontSize, setLang, setStoreCodeCurrent } = actions
export default reducer