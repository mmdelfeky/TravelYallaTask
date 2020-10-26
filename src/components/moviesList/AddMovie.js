import React from 'react';
import {AppButton, AppText, AppView} from '../../common';
import Input from './Input';

const AddMovie = ({name}) => {
  return (
    <AppView stretch marginHorizontal={5}>
      <AppText size={8} marginVertical={5} color="primary" bold>
        {name + ''}
      </AppText>
      <AppView overflow="hidden" stretch>
        <AppView
          marginHorizontal={0.1}
          borderBottomRightRadius={5}
          borderBottomLeftRadius={5}
          stretch
          marginBottom={5}
          elevation={7}>
          <AppView stretch margin={5}>
            <Input placeholder="Movie Name" />
            <Input placeholder="Movie Rate" />
            <Input placeholder="Movie Category" />
            <AppButton
              size={7}
              height={8}
              title="ADD Movie"
              stretch
              marginTop={5}
            />
          </AppView>
        </AppView>
      </AppView>
    </AppView>
  );
};

export default AddMovie;
