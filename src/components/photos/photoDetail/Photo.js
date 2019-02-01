/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
// eslint-disable-next-line camelcase
import GET_One_PHOTO from '../../../gql/photo/queries/getOnePhoto';
import UpdatePhoto from '../updatePhoto/UpdatePhoto';


// eslint-disable-next-line react/prop-types
const Photo = ({ match }) =>
  (<div>
    
    <Query
      // eslint-disable-next-line camelcase
      query={GET_One_PHOTO}
      variables={{
        id: match.params.id,
      }}
    >
      {({ data, loading }) => {
        if (loading) {
          return 'Loading...';
        }
        const { photo } = data;
        return (
          <div>
           <img alt={photo.title} src={photo.url} style={{margin:'0 auto', display :'block'}} />
            <UpdatePhoto photo={photo} />
  
          </div>
        );
      }}
    </Query>
  </div>);
Photo.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Photo;
