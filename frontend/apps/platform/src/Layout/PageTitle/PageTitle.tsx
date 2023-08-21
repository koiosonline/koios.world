type PageTitleType = {
  title: React.ReactNode;
  description?: React.ReactNode;
};

export const PageTitle = (props: PageTitleType) => {
  const { title, description } = props;

  return (
    <div className="flex flex-col gap-2 w-[32rem] my-4 mx-4">
      <h1 className="h3 text-primary-950">{title}</h1>

      {description && <p className="text-sm">{description}</p>}
    </div>
  );
};
