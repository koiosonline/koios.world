import { ButtonProps } from '../Button';

const defaultVariant = 'text';

export const getButtonVariant = (variant: ButtonProps['variant'] = defaultVariant) => {
  const button =
    'cursor-pointer rounded-md font-semibold text-sm px-4 py-2 transition duration-300 ease-in-out text-neutral-50 flex items-center justify-center w-fit uppercase text-center';

  switch (variant) {
    case 'contained':
      return `${button} bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-hover/80`;
    case 'outlined':
      return '';
    case 'text':
      return 'p-0 text-link-primary hover:text-link-primary-hover active:text-link-primary-active';
  }
};
