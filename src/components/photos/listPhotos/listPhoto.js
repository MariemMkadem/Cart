import React from 'react';
import { Query } from 'react-apollo';
import Photos from './Photos';
import GET_ALL_PHOTO from '../../../gql/photo/queries/getAllPhotos';
const listPhoto = () => (
  <Query query={GET_ALL_PHOTO} fetchPolicy="network-only" >
    {({ error, data, loading }) => {
      if (loading) {
        return (
          <div className="app">
            <h1>loading......</h1>
          </div>
        );
      }
      if (error) { return error; }
      const { photos } = data;
      return photos.map((photo) => (
        <Photos photo={photo} />));
    }}
  </Query>

);
export default listPhoto;
