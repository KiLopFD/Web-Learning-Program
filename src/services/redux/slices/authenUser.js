import { createSlice } from "@reduxjs/toolkit";

const authenUser = createSlice({
    name: 'authenUser',
    initialState: {
        authen: true,
    },
    reducers: {
        checkAuthen: (state, valCheck) => {
            
            if (valCheck.payload.detail === 'success')
            {
                // console.log(valCheck.payload)
                return {
                    authen: true 
                }
            }
            else 
                return {
                    authen:false,
                }
        }
    }
})

// Set up: action, reducer
const { actions, reducer } = authenUser
export const { checkAuthen } = actions
export default reducer