import { BaseProps } from '../interfaces/props';
import React from 'react';

import Typography, { Typo } from '.';

interface Props extends BaseProps {
  lg?: Typo;
  sm?: Typo;
  display?: 1 | 2;
  color?: string;
  fontWeight?: number | string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  children: React.ReactNode;
}

export default ({ children, ...restProps }: Props) => (
  <Typography md="Headline3" {...restProps}>
    {children}
  </Typography>
);