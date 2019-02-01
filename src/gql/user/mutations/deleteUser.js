import gql from 'graphql-tag';

const DELETE_User = gql`
mutation delete($id: ID!) {
  deleteUser(id :$id) {
    error
    success
  }
}
`;
export default DELETE_User;