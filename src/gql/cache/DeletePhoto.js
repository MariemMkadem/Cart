/* eslint-disable camelcase */
import gql from 'graphql-tag';

const Delete_Photo = gql`
  mutation deletePhoto {
    clearTodo @client
  }
`;
export default Delete_Photo;