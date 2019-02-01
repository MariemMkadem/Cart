
import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import FormRegister from '../../users/Register/FormRegister';
import UPDATE_USER from '../../../gql/user/mutations/updateUser';

const UpdateUser = ({ user }) => (
  <table cellPadding="0" cellSpacing="0" border="0" style={{ margin: 'auto' }}>
    <div>
      <Mutation mutation={UPDATE_USER}>
        {(updateUser) => <FormRegister user={user} onSubmit={updateUser} />}
      </Mutation>
    </div>
  </table>
);
UpdateUser.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UpdateUser;
