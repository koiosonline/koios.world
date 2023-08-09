'use client';

import * as RadixAccordion from '@radix-ui/react-accordion';
import React from 'react';
import { Icon } from '../utils/Icon/Icon';

type AccordionProps = {
  children: React.ReactNode;
  className?: string;
};

type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
  value: string;
};

type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

type AccordionContentProps = {
  children: React.ReactNode;
};

export const Accordion = (props: AccordionProps) => {
  const { children, className } = props;

  return (
    <RadixAccordion.Root className={`rounded-md w-full ${className}`} type={'multiple'} defaultValue={['BOOK 1']}>
      {children}
    </RadixAccordion.Root>
  );
};

export const AccordionItem = React.forwardRef(({ children, className, ...props }: AccordionItemProps, forwardedRef) => (
  <RadixAccordion.Item
    className={`overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10  w-full ${className}`}
    {...props}
    //   ref={forwardedRef}
  >
    {children}
  </RadixAccordion.Item>
));

export const AccordionTrigger = React.forwardRef(({ children, className, ...props }: AccordionTriggerProps, forwardedRef) => (
  <RadixAccordion.Header className="flex">
    <RadixAccordion.Trigger
      className={`group flex flex-1 items-center justify-between  px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none cursor-pointer ${className}`}
      {...props}
      // ref={forwardedRef}
    >
      {children}
      <Icon
        name="chevron-up-filled"
        className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
));

export const AccordionContent = React.forwardRef(({ children, ...props }: AccordionContentProps, forwardedRef) => (
  <RadixAccordion.Content
    className={'data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]'}
    {...props}
    //   ref={forwardedRef}
  >
    <div className="">{children}</div>
  </RadixAccordion.Content>
));
