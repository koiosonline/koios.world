import { CoursesGrid } from '../../../Courses/CoursesGrid';
import { TranslatedString } from '../../../I18N/components/TranslatedString';
import { Hero } from '@frontend/jsx-core';

const Page = () => {
  return (
    <>
      <Hero
        headline={<TranslatedString id="courses.page.name" />}
        title={<TranslatedString id="courses.page.title" />}
        description={<TranslatedString id="courses.page.description" />}
      />

      <div className="container flex max-w-screen-2xl flex-1 flex-col gap-10 lg:flex-row mt-10">
        <CoursesGrid />
      </div>
    </>
  );
};

export default Page;
