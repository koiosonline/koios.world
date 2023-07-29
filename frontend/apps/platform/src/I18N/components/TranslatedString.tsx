"use client"

import React from 'react';
import { Props as ReactIntlProps } from 'react-intl/src/components/message';
import { MessageDescriptor, useIntl } from 'react-intl';
import MarkdownToJSX from 'markdown-to-jsx';
import { en } from '../data/en.generated';
import { LocalizedLink } from '@frontend/jsx-core';

export type TypeOfTranslation = keyof typeof en;

type TranslatedStringProps = ReactIntlProps & {
  id: TypeOfTranslation;
  replacements?: { [key: string]: string };
};

export type FormatMessageType = Omit<MessageDescriptor, 'id'> & {
  id: TypeOfTranslation;
};

export const TranslatedString: React.FC<TranslatedStringProps> = ({ id, replacements, ...rest }) => {
  const intl = useTranslatedString();

  let message = intl.formatMessage({ id, ...rest });
  message = message.replace(/\\n/g, '<br />');

  if (replacements) {
    Object.keys(replacements).forEach((key) => {
      const regex = new RegExp(`${key}`, 'g');
      message = message.replace(regex, replacements[key]);
    });
  }

  return (
    <MarkdownToJSX
      options={{
        forceInline: true,
        overrides: {
          a: LinkComponent
        }
      }}
    >
      {message}
    </MarkdownToJSX>
  );
};

export const useTranslatedString = () => {
  const { formatMessage: intlFormatMessage } = useIntl();

  const formatMessage = (props: FormatMessageType) => {
    return intlFormatMessage(props);
  };

  return {
    formatMessage
  };
};

const LinkComponent = (props: { href: string; children: React.ReactNode }) => {
  const { href } = props;

  if (href.startsWith('/')) {
    return <LocalizedLink href={href}>{props.children}</LocalizedLink>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
};
