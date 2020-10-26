import React from 'react';
import {AppStarRating, AppText, AppView, TouchableView} from '../../common';

const CardActionBtns = ({rate}) => {
  return (
    <AppView stretch row spaceBetween>
      <AppStarRating size={5} {...{rate}} />
      <AppView row>
        <TouchableView padding={2}>
          <AppText color="rgb(0,116,132)">Edit</AppText>
        </TouchableView>
        <TouchableView padding={4}>
          <AppText color="rgb(142,2,65)">Delete</AppText>
        </TouchableView>
      </AppView>
    </AppView>
  );
};

export default CardActionBtns;
