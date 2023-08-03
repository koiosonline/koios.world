import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Typography } from '@frontend/jsx-core';
import { usePathname, useRouter } from 'next/navigation';

type chapters = {
  name: string;
  slug: string;
};

type level = {
  name: string;
    slug: string;
  chapters: chapters[];
};

type CourseLevelAccordionProps = {
  levels: level[];
};

export const CourseLevelAccordion = (props: CourseLevelAccordionProps) => {
  const { levels } = props;
  const router = useRouter()
  const pathname = usePathname()
  

  const handleListItemClick = (e: React.MouseEvent, path: string) => {
    e?.preventDefault()
    router.push(pathname + '/' + path.toLocaleLowerCase())
  };


  return (
    <Accordion>
      {levels.map((level, i) => (
        <AccordionItem value="item-1" key={level.name}>
          <AccordionTrigger>
            {i + 1}. {level.name}
          </AccordionTrigger>

          <AccordionContent>
            <ol>
              {level.chapters.map((chapter, i) => (
                <li key={chapter.name} onClick={(e) => handleListItemClick(e, `/${level.slug}/${chapter.slug}`)}>
                  <Typography component="h2">{chapter.name}</Typography>
                </li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
