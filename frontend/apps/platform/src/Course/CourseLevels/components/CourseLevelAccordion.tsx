import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Icon, Typography } from '@frontend/jsx-core';
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

const triggerBackgroundColors = ['bg-[#6247aa]', 'bg-[#815ac0]', 'bg-[#a06cd5]', 'bg-[#c19ee0]', 'bg-[#dac3e8]'];
const contentBackgroundColors = ['bg-[#7251b5]', 'bg-[#9163cb]', 'bg-[#b185db]', 'bg-[#d2b7e5]', 'bg-[#dec9e9]'];

const getBackgroundColors = (index: number) => {
  const triggerBgColor = triggerBackgroundColors[index % triggerBackgroundColors.length];
  const contentBgColor = contentBackgroundColors[index % contentBackgroundColors.length];
  return { triggerBgColor, contentBgColor };
};

export const CourseLevelAccordion = (props: CourseLevelAccordionProps) => {
  const { levels } = props;
  const router = useRouter();
  const pathname = usePathname();

  const handleListItemClick = (e: React.MouseEvent, path: string) => {
    e?.preventDefault();
    router.push(pathname + '/' + path.toLocaleLowerCase());
  };

  return (
    <Accordion id="levels" className="mt-10 pb-10 container max-w-5xl">
      {levels.map((level, i) => {
         const { triggerBgColor, contentBgColor } = getBackgroundColors(i);
         const formattedIndex = (i + 1).toString();

        return (
          <AccordionItem value={level.name} key={level.name} className=' text-white'>
            <AccordionTrigger className={triggerBgColor}>
              <div className="flex items-center gap-10 py-2">
                <Typography component="h2" variant="h1" className='w-10 text-start'>
                  {formattedIndex}
                </Typography>
                <Typography component="h2" variant="subtitle1">
                  {level.name}
                </Typography>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <ol className="flex flex-wrap">
                {level.chapters.map((chapter, i) => (
                  <li
                    key={chapter.name}
                    onClick={(e) => handleListItemClick(e, `/${level.slug}/${chapter.slug}`)}
                    className={`w-full sm:w-3/6 lg:w-2/6 cursor-pointer p-4 flex items-center gap-6 hover:opacity-75 ${contentBgColor}`}
                  >
                    <Typography component="h2">{chapter.name}</Typography>
                    <Icon name='chevron-up' className='rotate-90 shrink-0 ml-auto' />
                  </li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
