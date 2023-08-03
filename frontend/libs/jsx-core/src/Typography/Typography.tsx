type TypographyProps = {
    children: React.ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'footnote';
    component?: React.ElementType;
    className?: string;
};

export const Typography = (props: TypographyProps) => {
    const { children, variant, component: Component = 'p', className } = props;


    return (
        <Component className={`${variant ?? ''} ${className ?? ""}`}>
            {children}
        </Component>
    );
};