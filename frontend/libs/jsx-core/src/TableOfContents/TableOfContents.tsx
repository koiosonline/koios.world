import { Typography } from '../Typography/Typography';
import { generateTableOfContents } from './helpers/generateTableOfContents';

type TableOfContentsProps = {
  value: string;
};

export const TableOfContents = (props: TableOfContentsProps) => {
    const { value } = props;
    const tableOfContents = generateTableOfContents(value);

    console.log('tableOfContents', tableOfContents);
  return (
    <section className="w-full">
      <Typography component="h2">Table of Contents</Typography>
    </section>
  );
};
