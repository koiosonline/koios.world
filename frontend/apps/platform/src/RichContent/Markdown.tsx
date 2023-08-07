import MarkdownToJSX from 'markdown-to-jsx';
import { ElementType } from 'react';
import { RichArticleLink } from './components/RichArticleLink';

type MarkdownProps = {
  value: string;
  wrapper?: ElementType;
  openExternalLinksInNewTab?: boolean;
};

export const Markdown = (props: MarkdownProps) => {
  const { value, wrapper, openExternalLinksInNewTab } = props;

  const markDownToJsxOptions = {
    forceBlock: true,
    wrapper: wrapper,
    forceWrapper: true,
    overrides: {
      a: {
        component: RichArticleLink,
        props: { openExternalLinksInNewTab: openExternalLinksInNewTab }
      }
    }
  };
  return <MarkdownToJSX options={markDownToJsxOptions}>{value}</MarkdownToJSX>;
};
