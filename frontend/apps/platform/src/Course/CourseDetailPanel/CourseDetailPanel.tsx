import { Button } from '@frontend/jsx-core';
import { BorderedPanel } from '../../shared/Panel/BorderedPanel';
import { TranslatedString } from 'apps/platform/src/I18N/components/TranslatedString';
import { GetCourseQuery } from '../graphql/operations.content.generated';
import { usePathname } from 'next/navigation';
import { CourseInstructors } from './components/CourseInstructors';
import { CourseQuickLinks } from './components/CourseQuickLinks';
import { CourseUSPs } from './components/CourseUSPs';

export type CourseDetailPanelProps = {
  usps?: NonNullable<NonNullable<GetCourseQuery['courses']>['data'][0]['attributes']>['USPs'];
  quickLinks?: NonNullable<NonNullable<GetCourseQuery['courses']>['data'][0]['attributes']>['QuickLinks'];
  instructors?: NonNullable<NonNullable<NonNullable<GetCourseQuery['courses']>['data'][0]['attributes']>['Instructors']>['data'];
};

export const CourseDetailPanel = (props: CourseDetailPanelProps) => {
  const { usps, quickLinks, instructors } = props;
  const pathname = usePathname();

  return (
    <BorderedPanel className="mt-4 w-full xl:w-1/3 h-fit">
      <Button variant="contained" href={`${pathname}#levels`} className="w-full mb-4">
        <TranslatedString id="course.page.cta.start-course.label" />
      </Button>

      {usps && <CourseUSPs usps={usps} />}
      {quickLinks && <CourseQuickLinks quickLinks={quickLinks} />}
      {instructors && <CourseInstructors instructors={instructors} />}
    </BorderedPanel>
  );
};
