'use client';

import * as RadixAccordion from '@radix-ui/react-accordion';
import React from 'react';

type AccordionProps = {
  children: React.ReactNode;
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
  className?: string;
};

export const Accordion = (props: AccordionProps) => {
    const { children } = props;
  
    return (
      <RadixAccordion.Root
        className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        {children}
      </RadixAccordion.Root>
    );
  };

export const AccordionItem = React.forwardRef(({ children, className, ...props }: AccordionItemProps, forwardedRef) => (
  <RadixAccordion.Item
    className={
      'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]'
    }
    {...props}
    //   ref={forwardedRef}
  >
    {children}
  </RadixAccordion.Item>
));

export const AccordionTrigger = React.forwardRef(({ children, className, ...props }: AccordionTriggerProps, forwardedRef) => (
  <RadixAccordion.Header className="flex">
    <RadixAccordion.Trigger
      className={
        'text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none'
      }
      {...props}
      // ref={forwardedRef}
    >
      {children}
      {/* <ChevronDownIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        /> */}
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
));

export const AccordionContent = React.forwardRef(({ children, className, ...props }: AccordionContentProps, forwardedRef) => (
  <RadixAccordion.Content
    className={'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]'}
    {...props}
    //   ref={forwardedRef}
  >
    <div className="py-[15px] px-5">{children}</div>
  </RadixAccordion.Content>
));

