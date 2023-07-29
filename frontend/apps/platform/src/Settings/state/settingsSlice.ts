import { ThemeTypes } from "@frontend/core";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SupportedLanguageCodes, SupportedLanguages } from "../../I18N/availableLanguages";

type settingsType = {
    theme: ThemeTypes;
    locale: SupportedLanguages;
    localeCode: SupportedLanguageCodes;
};

export const initialState: settingsType = {
    theme: ThemeTypes.Light,
    locale: SupportedLanguages.English,
    localeCode: 'en'
};

export const settingsSlice = createSlice({
    name: "Settings",
    initialState: initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<settingsType['theme']>) => {
            state.theme = action.payload;
        },
        setLocale: (state, action: PayloadAction<settingsType['locale']>) => {
            state.locale = action.payload;
        },
        setLocaleCode: (state, action: PayloadAction<settingsType['localeCode']>) => {
            state.localeCode = action.payload;
        }
    },
});
