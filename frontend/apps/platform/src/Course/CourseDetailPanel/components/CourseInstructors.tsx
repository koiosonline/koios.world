import { Divider, Typography } from '@frontend/jsx-core';
import { CourseDetailPanelProps } from '../CourseDetailPanel';
import { TranslatedString } from '../../../I18N/components/TranslatedString';
import Image from 'next/image';

type CourseInstructorsProps = {
  instructors: CourseDetailPanelProps['instructors'];
};

export const CourseInstructors = (props: CourseInstructorsProps) => {
  const { instructors } = props;

  if (!instructors || instructors.length <= 0) return null;

  return (
    <>
      <Divider />

      <Typography component="h2" variant="subtitle1">
        <TranslatedString id="course.page.lecturers.title" />
      </Typography>

      <ul className="flex flex-col gap-4 mt-5">
        {instructors.map((item, i) => {
          const instructor = item.attributes?.ContactDetails;
          return (
            <li key={i} className="flex items-center gap-3">
              <Image
                src={instructor?.ProfilePicture?.data?.attributes?.formats.small.url}
                alt={instructor?.ProfilePicture?.data?.attributes?.alternativeText || ''}
                width={0}
                height={0}
                sizes="100vw"
                className="w-14 h-14 p-0.5 rounded-full object-cover overflow-hidden"
              />

              <div>
                <Typography className="font-semibold">{instructor?.Name}</Typography>
                <Typography className="text-sm">
                  {instructor?.Position}, {instructor?.Company}
                </Typography>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
