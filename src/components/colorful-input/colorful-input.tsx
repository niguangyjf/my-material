import * as React from 'react';
import { createElement } from 'react';
import { Input } from '@alifd/next';
import { bizCssPrefix } from '../../variables';
import './index.scss';

export interface ColorfulInputProps {
  color?: string;
  style?: object;
  border?: string;
}

const ColorfulInput: React.FC<ColorfulInputProps> = function ColorfulInput({
  color,
  border,
  style = {},
  ...otherProps
}) {
  const _style = style || {};
  if (color) {
    _style.backgroundColor = color;
  }
  if(border) {
    _style.border = border;
  }
  const _otherProps = otherProps || {};
  _otherProps.style = _style;
  return (
    <Input { ..._otherProps } />
  );
};

export default ColorfulInput;
