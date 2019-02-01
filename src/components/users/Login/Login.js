import React from 'react';
import { Mutation } from 'react-apollo';
import FormLogin from './FormLogin';
import LOGIN_USER from '../../../gql/user/mutations/loginUser';

function LoginUser() {
  return (
    <div className="app">
      <Mutation mutation={LOGIN_USER}>
        {(login) => <FormLogin onSubmit={login} />}
      </Mutation>
    </div>
  );
}
export default LoginUser;
