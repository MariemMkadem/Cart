import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import FormPhoto from '../../photos/addphoto/FormPhoto';
import UPDATE_PHOTO from '../../../gql/photo/mutations/updatePhoto'


const UpdatePhoto = ({ photo }) => (
  <Mutation mutation={UPDATE_PHOTO}>
    {(updatePhoto) => <FormPhoto photo={photo} onSubmit={updatePhoto} />}
  </Mutation>
);
UpdatePhoto.propTypes = {
  photo: PropTypes.object.isRequired,
};
export default UpdatePhoto;