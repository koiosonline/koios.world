import { Button, Typography } from '@frontend/jsx-core';
import { GetSubchapterQuery } from './graphql/operations.content.generated';
import { TranslatedString } from '../../I18N/components/TranslatedString';

type FurtherReadingsProps = {
  items: NonNullable<NonNullable<GetSubchapterQuery['subchapters']>['data'][0]['attributes']>['FurtherReadings'];
};

export const FurtherReadings = (props: FurtherReadingsProps) => {
  const { items } = props;

  if (!items || items.length <= 0) return null;

  return (
    <>
      <Typography component="h3" variant="h3" className="mb-4">
        <TranslatedString id="subchapter.page.further-readings.title" />
      </Typography>

      <ul className='list-disc list-inside'>
        {items.map((item, index) => (
          <li key={index} className="mb-4">
            <Button href={item?.URL} openExternalLinksInNewTab={item?.NewWindow !== false}>
              {item?.Label}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};
