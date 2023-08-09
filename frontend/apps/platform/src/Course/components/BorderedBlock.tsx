type BorderedBlockProps = {
    className?: string;
    children: React.ReactNode;
}
export const BorderedBlock = (props: BorderedBlockProps) => {
    const { className, children } = props;
    return (
        <div className={`border-2 border-contrast-900 rounded-lg p-4 ${className}`}>
            {children}
        </div>
    )
}