import { Button, Divider, Icon, IconNames, Typography } from '@frontend/jsx-core';
import { CourseDetailPanelProps } from '../CourseDetailPanel';
import { TranslatedString } from '../../../I18N/components/TranslatedString';

type CourseQuickLinksProps = {
  quickLinks: CourseDetailPanelProps['quickLinks'];
};

export const CourseQuickLinks = (props: CourseQuickLinksProps) => {
  const { quickLinks } = props;

  if (!quickLinks || quickLinks.length <= 0) return null;

  return (
    <>
      <Divider />

      <Typography component="h2" variant="subtitle1">
        <TranslatedString id="course.page.quick-links.title" />
      </Typography>

      <ul className="flex flex-col gap-2 mt-4">
        {quickLinks.map((quickLink, i) => (
          <li key={i} className="flex items-center gap-2 hover:opacity-75 italic">
            {quickLink?.Icon?.Icon && <Icon name={quickLink.Icon.Icon as unknown as (typeof IconNames)[number]} />}
            <Button href={quickLink?.URL} openExternalLinksInNewTab>
              <Typography>{quickLink?.Label}</Typography>
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};
