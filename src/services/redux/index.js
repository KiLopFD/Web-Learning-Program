import { configureStore } from "@reduxjs/toolkit";
// import reducer, change cus export default
import vsCodeReducer from './slices/vsCodeSlice'
import checkAuthen from './slices/authenUser'
import loadingState from "./slices/loadingState";

const store = configureStore({
    reducer: {
        vsCodeReducer: vsCodeReducer,
        checkAuthen: checkAuthen,
        loadingState: loadingState,
    },
})

export default store