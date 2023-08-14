import { Typography } from '@frontend/jsx-core';
import { BorderedPanel } from '../../shared/Panel/BorderedPanel';
import { TranslatedString } from '../../I18N/components/TranslatedString';
import { Markdown } from '../../RichContent/Markdown';

type CourseOverviewPanelProps = {
  description?: string | null;
};

export const CourseOverviewPanel = (props: CourseOverviewPanelProps) => {
  const { description } = props;

  if (!description) return null;

  return (
    <BorderedPanel className="mt-4">
      <Typography component="h2" variant="h4">
        <TranslatedString id="courses.page.overview.label" />
      </Typography>

      <div className="rich-article">
        <Markdown value={description} openExternalLinksInNewTab />
      </div>
    </BorderedPanel>
  );
};
