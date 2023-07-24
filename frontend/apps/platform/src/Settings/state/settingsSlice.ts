import { ThemeTypes } from "@frontend/core";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type settingsType = {
    theme: ThemeTypes;
};

export const initialState: settingsType = {
    theme: ThemeTypes.Light,
};

export const settingsSlice = createSlice({
    name: "Settings",
    initialState: initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<settingsType['theme']>) => {
            state.theme = action.payload;
        },
    },
});
