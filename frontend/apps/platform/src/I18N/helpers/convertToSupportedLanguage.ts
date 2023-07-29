import { SupportedLanguages, defaultLocale } from "../availableLanguages";

export const convertToSupportedLanguage = (language: string) => {
    const supportedLanguagesEntries = Object.entries(SupportedLanguages);
  
    for (const [key, value] of supportedLanguagesEntries) {
      if (value.toLowerCase() === language.toLowerCase()) {
        return value;
      }
    }
    
    return defaultLocale;
  };