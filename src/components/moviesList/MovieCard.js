import React from 'react';
import {
  AppImage,
  AppStarRating,
  AppText,
  AppView,
  TouchableView,
} from '../../common';
import CardActionBtns from './CardActionBtns';
const cover = require('../../assets/imgs/movieCover.jpg');
const MovieCard = ({name, description, rate}) => {
  return (
    <AppView
      overflow="hidden"
      stretch
      row
      marginVertical={2}
      marginHorizontal={5}
      borderRadius={10}
      padding={2}
      elevation={0.2}>
      <AppImage
        borderRadius={10}
        width={30}
        height={20}
        source={cover}
        resizeMode="cover"
      />
      <AppView marginHorizontal={4} flex stretch>
        <AppText bold color="black">
          {name}
        </AppText>
        <AppView stretch marginHorizontal={2} marginVertical={3} wrap>
          <AppText lineHeight={7} numberOfLines={4}>
            {'"' + description + '"'}
          </AppText>
        </AppView>

        <CardActionBtns {...{rate}} />
      </AppView>
    </AppView>
  );
};

export default MovieCard;
