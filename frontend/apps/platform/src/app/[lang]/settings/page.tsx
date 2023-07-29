'use client';

import { LocalStorageKeyTypes, ThemeTypes } from '@frontend/core';
import { SupportedLanguages, availableLanguages, defaultLocale } from 'apps/platform/src/I18N/availableLanguages';
import { PageTitle } from 'apps/platform/src/Layout/PageTitle/PageTitle';
import { SettingsItem, SettingsItemActionType } from 'apps/platform/src/Settings/SettingsItem';
import { settingsSlice } from 'apps/platform/src/Settings/state/settingsSlice';
import { useAppDispatch, useAppSelector } from 'apps/platform/src/store/hooks/storeHooks';
import { useRouter, useParams, usePathname } from 'next/navigation';

const Page = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.settings.theme);
  const currentLanguage = useAppSelector((state) => state.settings.locale);
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const setTheme = (theme: ThemeTypes) => {
    dispatch(settingsSlice.actions.setTheme(theme));
    localStorage.setItem(LocalStorageKeyTypes.KoiosTheme, theme);
  };

  const setLanguage = (language: SupportedLanguages) => {
    const lowerCaseLanguage = language.toLowerCase();

    if (params.lang === defaultLocale) {
      router.push(`/${lowerCaseLanguage}/${pathname}`);
    } else {
      const pushUrl = pathname.replace(params.lang, lowerCaseLanguage);
      router.push(pushUrl);
    }
  };

  return (
    <>
      <PageTitle
        title="Settings"
        description="Customize your preferences and control your experience. Adjust your account settings, privacy settings, notifications, and more to suit your needs."
      />

      <ul className=" mx-auto mt-10 max-w-2xl">
        <SettingsItem
          title="Platform Theme"
          description="A theme switches the color scheme of the platform. You can choose between light and dark mode."
          action={(e) => setTheme(e.target.value)}
          actionType={SettingsItemActionType.Select}
          showBorder={false}
          selectOptions={[
            { value: ThemeTypes.Light, label: 'Light' },
            { value: ThemeTypes.Dark, label: 'Dark' }
          ]}
          defaultValue={currentTheme}
        />

        <SettingsItem
          title="Language"
          description="Choose your preferred language. This will change the language of the platform."
          action={(e) => setLanguage(e.target.value)}
          actionType={SettingsItemActionType.Select}
          showBorder={false}
          selectOptions={Object.entries(availableLanguages).map(([key, language]) => ({
            value: language.locale,
            label: language.name
          }))}
          defaultValue={currentLanguage}
        />

        {/* <SettingsItem
          title="Add $Titan to your wallet"
          description="See your $Titan balance directly in your MetaMask wallet by importing it. Simply select the 'Import' option and your $Titan balance will be automatically visible in your MetaMask wallet."
          action={() => console.log('edit')}
          actionType={SettingsItemActionType.Button}
          actionLabel="Import"
        /> */}
      </ul>
    </>
  );
};

export default Page;
