import Link from 'next/link';
import { getButtonVariant } from './helpers/getButtonVariant';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  href?: string;
  className?: string;
  onClick?: () => void;
  openExternalLinksInNewTab?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { children, variant, href, className, onClick, openExternalLinksInNewTab } = props;
  const buttonVariant = getButtonVariant(variant);

  if (href) {
    return (
      <Link
        href={href}
        className={`${buttonVariant} ${className}`}
        target={openExternalLinksInNewTab ? '_blank' : undefined}
        rel={openExternalLinksInNewTab ? 'noopener noreferrer' : ''}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={` ${buttonVariant} ${className}`}>
      {children}
    </button>
  );
};
