import { Icon, Typography } from '@frontend/jsx-core';
import { GetCourseQuery } from '../graphql/operations.content.generated';
import { TranslatedString } from 'apps/platform/src/I18N/components/TranslatedString';
import { BorderedPanel } from '../../shared/Panel/BorderedPanel';

type CourseLearningsPanelProps = {
  learnings: NonNullable<NonNullable<GetCourseQuery['courses']>['data'][0]['attributes']>['Learnings'];
};

export const CourseLearningsPanel = (props: CourseLearningsPanelProps) => {
  const { learnings } = props;

  if (!learnings) return null;

  return (
    <BorderedPanel className="mt-4">
      <Typography component="h2" variant="h4">
        <TranslatedString id="course.page.learnings.title" />
      </Typography>

      <ul className='flex flex-col gap-2 mt-4'>
        {learnings.map((learning, i) => (
          <li key={i} className="flex items-center gap-2">
            <Icon name="check" />
            <Typography component="p">{learning?.Title}</Typography>
          </li>
        ))}
      </ul>
    </BorderedPanel>
  );
};
