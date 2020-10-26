import React from 'react';
import {AppList, AppScrollView, AppView} from '../common';
import CategoryCard from '../components/home/CategoryCard';
import CreateCategory from '../components/home/CreateCategory';
import moviesData from '../data/movies-data.json';

const Home = ({navigation}) => {
  return (
    <AppScrollView backgroundColor="white" flex stretch>
      <CreateCategory />
      <AppView marginTop={10} stretch row wrap>
        {moviesData.categories.map((item) => (
          <CategoryCard {...{navigation}} {...item} />
        ))}
      </AppView>
    </AppScrollView>
  );
};

export default Home;
