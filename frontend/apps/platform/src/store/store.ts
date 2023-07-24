import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { settingsSlice } from "../Settings/state/settingsSlice";

const rootReducer = combineReducers({
    settings: settingsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;