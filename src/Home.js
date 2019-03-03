import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';
import Movie from './movie';

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return 'loading';
      if (error) return 'something happened';
      return data.movies.map(movie => (
        <Movie
        id={movie.id}))
      
    }}
  </Query>
);

export default Home;
