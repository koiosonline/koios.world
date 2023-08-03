import { useParams, useRouter } from 'next/navigation';
import { Typography } from '../Typography/Typography';

type NavigationItemSubchapters = {
  name: string;
  slug: string;
};

export type NavigationItem = {
  chapter: string;
  subchapters: NavigationItemSubchapters[];
};

type VideoPlayerNavigationListProps = {
  items: NavigationItem[];
  subtitle?: string;
  title?: string;
};

export const VideoPlayerNavigationList = (props: VideoPlayerNavigationListProps) => {
  const { items, subtitle, title } = props;
  const router = useRouter();
  const params = useParams();
  const [course, book, chapter] = params.level.split('/');

  const handleLinkClick = (subchapterSlug: string) => {
    router.push(`/courses/${course}/${book}/${chapter}/${subchapterSlug}`);
  };

  return (
    <section className="w-2/5">
      {(title || subtitle) && (
        <div className='p-4 border-b-2'>
          {subtitle && <Typography variant='subtitle1'>{subtitle}</Typography>}
          {title && <Typography component="h2" variant='h6' className='normal-case'>{title}</Typography>}
        </div>
      )}

      <ul className='p-4'>
        {items.map((item) => (
          <li key={item.chapter}>
            <Typography component="h3">{item.chapter}</Typography>
            <ul>
              {item.subchapters.map((subchapter, i) => (
                <li onClick={() => handleLinkClick(subchapter.slug)} key={subchapter.name} className="text-red-500">
                  <Typography>{i}. {subchapter.name}</Typography>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
