import React, { lazy, Suspense } from 'react';

// A list of all the icons that are available in alphabetical order.
export const IconNames = [
  'award',
  'book-atlas',
  'calendar',
  'chart-simple',
  'check-in-circle',
  'check',
  'chevron-up',
  'chevron-up-filled',
  'clipboard',
  'clock',
  'clone',
  'discord',
  'earth',
  'file-powerpoint',
  'file',
  'gear',
  'hamburger',
  'id-badge',
  'layer-group',
  'magnifying-glass',
  'menu-fold',
  'menu-unfold',
  'moon',
  'sun',
  'trophy',
  'user',
  'users'
] as const;

interface IconProps {
  name: (typeof IconNames)[number];
  className?: string;
}

const IconComponent = ({ name, className }: IconProps) => {
  const iconClass = `icon icon--${name} ${className ? className : ''} block h-4 w-4 fill-current`;

  if (!name || !IconNames.includes(name)) {
    return null;
  }

  const Icon = lazy(() =>
    import(`./icons/${name}`).then((module) => ({
      default: () => React.cloneElement(module.default(), { className: `${iconClass}` })
    }))
  );

  return (
    <Suspense fallback={<div>Loading...</div>} >
      <Icon />
    </Suspense>
  );
};

export const Icon = React.memo(IconComponent);
