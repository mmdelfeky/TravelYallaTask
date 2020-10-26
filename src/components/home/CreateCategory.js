import React from 'react';
import {AppButton, AppView} from '../../common';
import Input from '../Input';

const CreateCategory = () => {
  return (
    <AppView overflow="hidden" stretch marginHorizontal={5}>
      <AppView
        marginHorizontal={0.1}
        borderBottomRightRadius={5}
        borderBottomLeftRadius={5}
        stretch
        marginBottom={5}
        elevation={7}>
        <AppView stretch margin={5}>
          <Input placeholder="Category Name" />
          <Input placeholder="Category Description" />
          <AppButton height={8} title="CREATE" stretch marginVertical={10} />
        </AppView>
      </AppView>
    </AppView>
  );
};

export default CreateCategory;
