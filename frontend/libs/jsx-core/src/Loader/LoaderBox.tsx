type LoaderBoxProps = {
  className?: string;
};

export const LoaderBox = (props: LoaderBoxProps) => {
  const { className } = props;
  
  return (
    <div className={`flex justify-center items-center w-full h-72 ${className}`}>
      <span className="flex items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
        <span className="h-12 w-12 rounded-full bg-fill" />
      </span>
    </div>
  );
};
