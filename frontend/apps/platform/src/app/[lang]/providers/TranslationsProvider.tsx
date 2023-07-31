import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { en } from '../../../I18N/data/en.generated';
import { GetTranslationsDocument } from '../../../I18N/components/graphql/operations.content.generated';
import { transformTranslations } from '../../../I18N/helpers/transformTranslations';
import { useAppSelector } from '../../../store/hooks/storeHooks';
import { SupportedLanguages, availableLanguages } from '../../../I18N/availableLanguages';
import { useQuery } from '@apollo/client';

type TranslationsProviderProps = {
  children: React.ReactNode;
};

/**
 * Provider takes these steps:
 * 1. Get translations from CMS
 * 2. Got data succesfully?
 * 2.1. Is EN? Return all labels (EN is the leading language)
 * 2.2. Is not EN? Return all labels combined with EN labels (could be that some labels are not translated yet, so they're prefix with e.g. (nl))
 * 3. Got error? Return fallback EN labels
 */

export const TranslationsProvider = (props: TranslationsProviderProps) => {
  const locale = useAppSelector((state) => state.settings.locale);
  const localeCode = useAppSelector((state) => state.settings.localeCode);
  const activeLanguage = availableLanguages[locale];
  const [activeLanguageCmsPhrases, setActiveLanguageCmsPhrases] = useState<Record<string, string>>({});

  const { data, loading, error } = useQuery(GetTranslationsDocument, {
    variables: {
      locale: localeCode,
      pagination: {
        pageSize: 500
      }
    }
  });

  useEffect(() => {
    if (data) {
      let translations = transformTranslations(data.translations);

      if (localeCode !== 'en') {
        const defaultTranslationsWithPrefix = Object.keys(en).reduce((acc, key) => {
          return {
            ...acc,
            [key]: `(${localeCode}) ${en[key as keyof typeof en]}`
          };
        }, {});

        translations = { ...defaultTranslationsWithPrefix, ...translations };
      }

      setActiveLanguageCmsPhrases(translations);
    }

    if (!data && error) {
      setActiveLanguageCmsPhrases(en);
    }
  }, [data, error]);

  if (loading || Object.keys(activeLanguageCmsPhrases).length === 0) {
    return null;
  }

  return (
      <IntlProvider messages={activeLanguageCmsPhrases} locale={activeLanguage.locale}>
        {props.children}
      </IntlProvider>
  );
};
