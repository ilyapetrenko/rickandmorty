import {configureStore} from "@reduxjs/toolkit";
import {ramApi} from "./reducers/ramApi";
import {ramReducer} from "./reducers/ramSlice";


export const store = configureStore({
    reducer: {
        [ramApi.reducerPath]: ramApi.reducer,
        ram: ramReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ramApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>