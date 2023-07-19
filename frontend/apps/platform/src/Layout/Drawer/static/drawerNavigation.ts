import { IconNames } from "@frontend/jsx-core";

export type DrawerNavigationItemType = {
  name: string;
  href: string;
  icon: (typeof IconNames)[number];
};

type DrawerNavigationType = {
  [category: string]: DrawerNavigationItemType[];
};


export const drawerNavigation: DrawerNavigationType = {
    NoCategory: [
      {
        name: 'Dashboard',
        href: '/',
        icon: 'layer-group'
      },
      {
        name: 'My profile',
        href: '/my-profile',
        icon: 'user'
      }
    ],
    Learn: [
      {
        name: 'Courses',
        href: '/courses',
        icon: 'earth'
      },
      {
        name: 'Join community',
        href: '/join-community',
        icon: 'users'
      }
    ],
    Earn: [
      {
        name: 'Rewards centrum',
        href: '/rewards',
        icon: 'trophy'
      },
      {
        name: 'Badges',
        href: '/badges',
        icon: 'award'
      }
    ],
    Connect: [
      {
        name: 'Leaderboard',
        href: '/leaderboard',
        icon: 'chart-simple'
      }
    ]
  };