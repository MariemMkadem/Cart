import React from 'react';
import { Mutation } from 'react-apollo';
import ADD_USER from '../../../gql/user/mutations/addUser';
import FormRegister from './FormRegister';
const Register = () => (
  <div className="app">
    <table cellPadding="0" cellSpacing="0" border="0" style ={{margin :'auto'}}>
      <div>
        <Mutation mutation={ADD_USER}>
          {(createUser) => <FormRegister onSubmit={createUser} />
          }
        </Mutation>
      </div>
    </table>
  </div>
);
export default Register;
