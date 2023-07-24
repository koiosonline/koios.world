"use client"

import { LocalStorageKeyTypes, ThemeTypes } from '@frontend/core';
import { PageTitle } from '../../Layout/PageTitle/PageTitle';
import { SettingsItem, SettingsItemActionType } from '../../Settings/SettingsItem';
import { settingsSlice } from '../../Settings/state/settingsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/storeHooks';

const Page = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.settings.theme);

  const setTheme = (theme: ThemeTypes) => {
    dispatch(settingsSlice.actions.setTheme(theme));
    localStorage.setItem(LocalStorageKeyTypes.KoiosTheme, theme);
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
          title="Add $Titan to your wallet"
          description="See your $Titan balance directly in your MetaMask wallet by importing it. Simply select the 'Import' option and your $Titan balance will be automatically visible in your MetaMask wallet."
          action={() => console.log('edit')}
          actionType={SettingsItemActionType.Button}
          actionLabel="Import"
        />
      </ul>
    </>
  );
};

export default Page;
