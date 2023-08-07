type RichArticleLinkProps = {
    href?: string;
    openExternalLinksInNewTab?: boolean;
    children?: React.ReactNode;
};

export const RichArticleLink = (props: RichArticleLinkProps) => {
    const { href, openExternalLinksInNewTab, children } = props;
    return (
        <a
            href={href}
            target={openExternalLinksInNewTab ? '_blank' : undefined}
            rel={openExternalLinksInNewTab ? 'noopener noreferrer' : ''}
        >
            {children}
        </a>
    );
};
