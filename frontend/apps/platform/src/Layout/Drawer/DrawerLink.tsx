import { Icon, IconNames, LocalizedLink } from '@frontend/jsx-core';
import Link from 'next/link';

type DrawerLinkType = {
  href: string;
  icon: (typeof IconNames)[number];
  isActive: (href: string) => boolean;
  children: React.ReactNode;
  newTab?: boolean;
  
};

export const DrawerLink = (props: DrawerLinkType) => {
  const { href, icon, isActive, children, newTab } = props;
  const activeClass = isActive(href) ? 'bg-violet-400/10 text-primary-950' : '';

  return (
    <Link
      href={href}
      className={`flex items-center gap-4 rounded p-3 text-sm font-semibold duration-150 ease-in-out hover:bg-violet-400/10 hover:text-primary-950 ${activeClass}`}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      <Icon name={icon} />
      {children}
    </Link>
  );
};
