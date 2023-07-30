import { CoursesGrid } from '../../../Courses/CoursesGrid';
import { TranslatedString } from '../../../I18N/components/TranslatedString';
import { Hero } from '@frontend/jsx-core';

const Page = () => {
  return (
    <>
      <Hero
        headline={"Courses"}
        title={<TranslatedString id="courses.page.title" />}
        description={<TranslatedString id="courses.page.description" />}
      />

      <CoursesGrid />
    </>
  );
};

export default Page;