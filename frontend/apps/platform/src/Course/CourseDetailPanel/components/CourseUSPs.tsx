import { Divider, Icon, IconNames, Typography } from '@frontend/jsx-core';
import { CourseDetailPanelProps } from '../CourseDetailPanel';
import { TranslatedString } from '../../../I18N/components/TranslatedString';

type CourseUSPsProps = {
  usps: CourseDetailPanelProps['usps'];
};

export const CourseUSPs = (props: CourseUSPsProps) => {
  const { usps } = props;

  if (!usps) {
    return null;
  }

  return (
    <>
      <Divider />

      <Typography component="h2" variant="subtitle1">
        <TranslatedString id="course.page.usps.title" />
      </Typography>

      <ul className="flex flex-col gap-2 mt-4">
        {usps.map((usp, i) => (
          <li key={i} className="flex items-center gap-2">
            {usp?.Icon?.Icon && <Icon name={usp.Icon.Icon as unknown as (typeof IconNames)[number]} />}
            <Typography>{usp?.Title}</Typography>
          </li>
        ))}
      </ul>
    </>
  );
};
