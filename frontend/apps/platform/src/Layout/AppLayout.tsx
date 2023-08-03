'use client';

import { useSizes } from '@frontend/jsx-core';
import { useEffect, useState } from 'react';
import defaultTheme from 'tailwindcss/defaultTheme';
import { Drawer } from './Drawer/Drawer';
import { Header } from './Header/Header';
import { Inter, Righteous } from 'next/font/google'

type LayoutType = {
  children: React.ReactNode;
};

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const righteous = Righteous({ 
  subsets: ['latin'],
  weight: ["400"],
  variable: '--font-righteous',
})


const koiosDrawerSettingKey = 'KoiosApp.DrawerIsUnfolded';

export const AppLayout = ({ children }: LayoutType) => {
  const storedDrawerSetting = typeof window !== 'undefined' ? localStorage.getItem(koiosDrawerSettingKey) : undefined;
  const drawerSetting = storedDrawerSetting ? JSON.parse(storedDrawerSetting) : true;
  const [isUnfolded, setIsUnfolded] = useState<boolean>(drawerSetting);

  const sizes = useSizes((width) => ({
    isMobile: width < parseInt(defaultTheme.screens.lg)
  }));

  const toggleDrawer = () => {
    setIsUnfolded(() => !isUnfolded);

    if (typeof window !== 'undefined') {
      localStorage.setItem(koiosDrawerSettingKey, JSON.stringify(!isUnfolded));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < parseInt(defaultTheme.screens.lg);
      const shouldBeUnfolded = !isMobile;
      if (isUnfolded !== shouldBeUnfolded) {
        toggleDrawer();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUnfolded]);

  return (
    <>
      <Header isUnfolded={isUnfolded} toggleDrawer={toggleDrawer} isMobile={sizes.isMobile} />
      <Drawer isUnfolded={isUnfolded} isMobile={sizes.isMobile} />
      <main
        className={`${inter.variable} ${righteous.variable} font-base mt-14 h-full flex grow flex-col break-words duration-300 ease-in-out ${
          isUnfolded && !sizes.isMobile ? 'ml-72  w-[calc(100%-theme(space.72))]' : ''
        }`}
      >
        {children}
      </main>
    </>
  );
};
