import { Typography } from '../Typography/Typography';

type HeroProps = {
  headline: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
};

export const Hero = (props: HeroProps) => {
  const { headline, title, description } = props;
  return (
    <section className="bg-violet-400/10 text-primary-dark">
      <div className="container max-w-screen-2xl text-center flex flex-col md:flex-row px-10 py-20 gap-10 md:text-left">
        <div className="md:w-2/5 flex justify-center items-center">
          <Typography component="h1" variant="h2">
            {headline}
          </Typography>
        </div>

        <div className="md:w-3/5">
          <Typography component="h2" variant="h5">
            {title}
          </Typography>
          {description && <Typography className='text-primary-dark/70 mt-2'>{description}</Typography>}
        </div>
      </div>
    </section>
  );
};
