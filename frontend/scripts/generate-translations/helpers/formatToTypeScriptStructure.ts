import { SupportedLanguageCodes } from "../../../apps/platform/src/I18N/availableLanguages";

export const formatToTypeScriptStructure = (lang: SupportedLanguageCodes, data: string, disclaimer: string) => {
  let typescriptStructure = `${disclaimer}
        
export const ${lang} = ${data};
        `;

  // Use EN as base language. All other languages will be based off of it
  if (lang !== 'en') {
    typescriptStructure = `${disclaimer}

import { en } from './en.generated';

export const ${lang}: Partial<typeof en> = ${data};
          `;
  }

  return typescriptStructure;
};
