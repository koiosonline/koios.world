import { useEffect } from 'react';
import { LocalStorageKeyTypes, ThemeTypes } from '@frontend/core';
import { useAppDispatch, useAppSelector } from '../../store/hooks/storeHooks';
import { settingsSlice } from '../../Settings/state/settingsSlice';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.settings.theme);

  // Get theme from local storage and set it in redux
  useEffect(() => {
    const localTheme = localStorage.getItem(LocalStorageKeyTypes.KoiosTheme);

    if (localTheme) {
      dispatch(settingsSlice.actions.setTheme(localTheme as ThemeTypes));
    }
  }, []);

  // Set theme on load
  useEffect(() => {
    if (theme) {
      document.body.className = theme;
    }
  }, [theme]);

  return children;
};
