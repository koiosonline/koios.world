import { Typography } from '../../../../../libs/jsx-core/src/Typography/Typography';
import { TranslatedString } from '../../I18N/components/TranslatedString';

type ErrorBoxProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
};

export const ErrorBox = (props: ErrorBoxProps) => {
  const { title, description, className } = props;

  const errorTitle = title ? title : <TranslatedString id="error.default.title" />;
  const errorDescription = description ? description : <TranslatedString id="error.default.description" />;

  return (
    <div className={` bg-error-50 p-4 h-fit rounded-lg max-w-3xl mx-auto ${className}`}>
      <Typography component="h2" variant="subtitle1" className="text-error-150">
        {errorTitle}
      </Typography>

      <Typography className='text-error-150'>{errorDescription}</Typography>
    </div>
  );
};
