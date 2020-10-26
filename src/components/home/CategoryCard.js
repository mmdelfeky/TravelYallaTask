import React from 'react';
import {AppImage, AppText, AppView, TouchableView} from '../../common';
import {push} from '../../common/Navigation';
const cover = require('../../assets/imgs/movieCover.jpg');
const CategoryCard = ({name, navigation, movies}) => {
  return (
    <TouchableView
      onPress={() => push(navigation, 'MoviesList', {movies, name})}
      margin={4}
      borderRadius={10}>
      <AppImage
        width={44}
        height={32}
        source={cover}
        resizeMode="cover"
        borderRadius={10}
      />

      <AppText bold color="darkgrey">
        {name}
      </AppText>
      <AppView width={44}>
        <AppText numberOfLines={1} color="rgb(49,143,159)">
          {movies[0].description}
        </AppText>
      </AppView>
    </TouchableView>
  );
};

export default CategoryCard;
