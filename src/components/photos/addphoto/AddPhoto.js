import React from 'react';
import { Mutation } from 'react-apollo';
import ADD_PHOTO from '../../../gql/photo/mutations/addPhoto';
import FormPhoto from './FormPhoto';

const AddPhoto = () => (

  <div className="app">

    <table cellPadding="0" cellSpacing="0" border="0" style={{ margin: 'auto' }}>
      <div>
        <Mutation mutation={ADD_PHOTO}>
          {(createPhoto) => <FormPhoto onSubmit={createPhoto} />
          }
        </Mutation>
      </div>
    </table>
  </div>
);
export default AddPhoto;
