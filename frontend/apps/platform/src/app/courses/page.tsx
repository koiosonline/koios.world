import { PageTitle } from "../../Layout/PageTitle/PageTitle";
import { CoursesGrid } from "../../Courses/CoursesGrid";


const Page = () => {

  
  return (
    <>
      <PageTitle
        title="Courses"
        description="Discover new worlds and expand your knowledge about different topics or continue where you left off"
      />

      <CoursesGrid />
    </>
  );
};

export default Page;
