export type SliceSupportedLanguage<T extends string> = T extends `${infer Lang}-${infer Rest}` ? Lang : T;

export enum SupportedLanguages {
  English = 'en-US',
  Dutch = 'nl-NL'
}

export type SupportedLanguageCodes = SliceSupportedLanguage<SupportedLanguages>;

export type AvailableLanguages = {
  [key in SupportedLanguages]: {
    name: string;
    locale: SupportedLanguages;
  };
};

export const defaultLocale = SupportedLanguages.English;

export const availableLanguages: AvailableLanguages = {
  'en-US': {
    name: 'English',
    locale: SupportedLanguages.English
  },
  'nl-NL': {
    name: 'Nederlands',
    locale: SupportedLanguages.Dutch
  }
};
