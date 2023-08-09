"use client"

import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';
import { DrawerLink } from './DrawerLink';
import {
  DrawerNavigationItemType,
  drawerNavigation,
} from './static/drawerNavigation';
import { LocalizedLink } from '@frontend/jsx-core';

type DrawerType = {
  isUnfolded?: boolean;
  isMobile?: boolean;
};

export const Drawer = (props: DrawerType) => {
  const { isUnfolded, isMobile } = props;
  const pathname = usePathname();
  const params = useParams();

  const isActive = (href: string) => pathname === `/${params.lang}${href}`;

  return (
    <nav
      className={`fixed z-40 flex h-full min-h-screen w-72 flex-col bg-white text-gray-400  duration-300 ease-in-out ${
        isMobile ? 'pt-20' : 'pt-0'
      } ${isUnfolded ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {!isMobile && (
        <LocalizedLink href="/" className="container mx-auto mt-16 mb-10 w-fit">
          <Image
            src="/assets/images/logo/koios-logo.svg"
            alt="Koios Logo"
            width={150}
            height={100}
          />
        </LocalizedLink>
      )}

      <div className="container overflow-y-auto">
        {Object.keys(drawerNavigation).map((category) => (
          <div key={category} className="mt-8">
            {category !== 'NoCategory' && (
              <h3 className="mb-2 text-xs">{category}</h3>
            )}

            <ul>
              {drawerNavigation[category].map(
                (item: DrawerNavigationItemType) => (
                  <li key={item.name}>
                    <DrawerLink
                      href={item.href}
                      icon={item.icon}
                      isActive={isActive}
                    >
                      {item.name}
                    </DrawerLink>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mt-auto border-t-2 border-slate-200 py-2">
        <DrawerLink href="/settings" icon="gear" isActive={isActive}>
          Settings
        </DrawerLink>
      </div>
    </nav>
  );
};
