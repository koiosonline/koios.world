export const Greeting = () => {
  const currentDateTime = new Date();

  return (
    <div>
      <h1 className="">{getGreeting()},</h1>
      <p>{formatDate(currentDateTime)}</p>
    </div>
  );
};

const getGreeting = () => {
  const hourOfDay = new Date().getHours();

  if (hourOfDay < 12) {
    return 'Good morning';
  } else if (hourOfDay < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
};

const formatDate = (date: any) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    return `Today, ${formattedDate}`;
  };