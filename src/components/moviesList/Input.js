import React from 'react';
import {AppIcon, AppInput} from '../../common';

const Input = (props) => {
  return (
    <AppInput
      leftItems={<AppIcon name="layout" type="foundation" />}
      {...props}
      stretch
    />
  );
};

export default Input;
