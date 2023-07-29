import { useParams } from 'next/navigation';
import Link from 'next/link';

type LocalizedLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export const LocalizedLink = (props: LocalizedLinkProps) => {
  const { href, ...rest } = props;
  const lang = useParams().lang.toLowerCase();
  const localizedHref = lang ? `/${lang}${href}` : href;

  return (
    <Link href={localizedHref} {...rest}>
      {props.children}
    </Link>
  );
};
