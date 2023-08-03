import MarkdownToJSX from 'markdown-to-jsx';

type MarkdownProps = {
    value: string;
  };

export const Markdown = (props: MarkdownProps) => {
    return (
        <MarkdownToJSX >
            {props.value}
        </MarkdownToJSX>
    )
    }