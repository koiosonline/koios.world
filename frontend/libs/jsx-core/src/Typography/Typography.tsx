type TypographyProps = {
    children: React.ReactNode;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    component?: React.ElementType;
};

export const Typography = (props: TypographyProps) => {


    return (
        <div>
            <h1>Typography</h1>
        </div>
    );
};