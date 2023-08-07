import { Typography } from '../Typography/Typography';

type HeroProps = {
  headline: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
};

export const Hero = (props: HeroProps) => {
  const { headline, title, description } = props;
  return (
    <section className="bg-indigo-600 text-white flex flex-col md:flex-row px-10 py-20 gap-10">
      <div className="w-2/5 flex justify-center items-center">
        <Typography component="h1" variant="h2">
          {headline}
        </Typography>
      </div>

      <div className="w-3/5">
        <Typography component="h2" variant="h5">
          {title}
        </Typography>
        {description && <Typography>{description}</Typography>}
      </div>
    </section>
  );
};
