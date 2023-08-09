import { Typography } from '@frontend/jsx-core';
import Image from 'next/image';

type CourseCardProps = {
  name: string;
  alternativeText?: string;
  thumbnail: string;
};

export const CourseCard = (props: CourseCardProps) => {
  const { name, thumbnail, alternativeText } = props;

  return (
    <div className=" bg-base flex h-full flex-col rounded-lg shadow-softer duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-soft cursor-pointer">
      <div className="relative pb-[56.25%]">
        <Image
          src={thumbnail}
          alt={alternativeText || name}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full p-0.5 rounded-lg object-cover absolute"
          priority
        />
      </div>

      <Typography component="h2" variant='subtitle1' className='mt-3 mb-4 mx-4 '>{name}</Typography>
    </div>
  );
};
