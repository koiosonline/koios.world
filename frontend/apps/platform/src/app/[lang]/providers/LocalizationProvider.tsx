import { useEffect } from 'react';
import { useAppDispatch } from '../../../store/hooks/storeHooks';
import { settingsSlice } from '../../../Settings/state/settingsSlice';
import { useParams } from 'next/navigation';
import { SupportedLanguageCodes } from 'apps/platform/src/I18N/availableLanguages';
import { convertToSupportedLanguage } from 'apps/platform/src/I18N/helpers/convertToSupportedLanguage';

type LocalizationProviderProps = {
  children: React.ReactNode;
};

export const LocalizationProvider = ({ children }: LocalizationProviderProps) => {
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.lang) {
      const supportedLanguage = convertToSupportedLanguage(params.lang);
      dispatch(settingsSlice.actions.setLocale(supportedLanguage));
      dispatch(settingsSlice.actions.setLocaleCode(supportedLanguage.slice(0, 2) as SupportedLanguageCodes));
    }
  }, [params.lang]);

  return children;
};
