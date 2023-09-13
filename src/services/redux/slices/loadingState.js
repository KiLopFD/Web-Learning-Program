import { createSlice } from "@reduxjs/toolkit";

const loadingState = createSlice({
    name: 'authenUser',
    initialState: {
        isLoading: false,
    },
    reducers: {
        checkLoading: (state, valCheck) => {
            return {
                ...state,
                isLoading: valCheck.payload
            }
        }
    }
})

// Set up: action, reducer
const { actions, reducer } = loadingState
export const { checkLoading } = actions
export default reducer