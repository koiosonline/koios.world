import { IconNames } from "@frontend/jsx-core";

export type DrawerNavigationItemType = {
  name: string;
  href: string;
  icon: (typeof IconNames)[number];
  newTab?: boolean;
};

type DrawerNavigationType = {
  [category: string]: DrawerNavigationItemType[];
};

export const drawerNavigation: DrawerNavigationType = {
    NoCategory: [
      // {
      //   name: 'Dashboard',
      //   href: '/',
      //   icon: 'layer-group'
      // }
    ],
    Learn: [
      {
        name: 'Courses',
        href: '/courses',
        icon: 'earth'
      },
      {
        name: 'Wiki',
        href: 'https://wiki.koios.world/',
        icon: 'book-atlas',
        newTab: true
      }
    ],
    Earn: [
      {
        name: 'Mint a Titan',
        href: 'https://titans.koios.world/',
        icon: 'clone',
        newTab: true
      },
      {
        name: 'NFTs',
        href: 'https://nfts.koios.world/',
        icon: 'id-badge',
        newTab: true
      }
    ],
    Connect: [
        {
        name: 'Community',
        href: 'https://discord.gg/jBjudugeBa',
        icon: 'discord',
        newTab: true
      }
    ]
  };