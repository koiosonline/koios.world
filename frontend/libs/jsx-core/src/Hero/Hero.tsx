type HeroProps = {
  headline: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
};

export const Hero = (props: HeroProps) => {
  const { headline, title, description } = props;
  return (
    <section className="bg-indigo-600 text-white flex p-10 gap-10">
      <div className="w-2/5 flex justify-center items-center">
        <h1>{headline}</h1>
      </div>

      <div className="w-3/5">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
};