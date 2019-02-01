import gql from 'graphql-tag';
// eslint-disable-next-line camelcase
const GET_One_USER = gql`
 query user ($id:ID!) {
   user (id: $id) {
   _id
   firstName
   lastName
   email
   password
   }
 }
`;
// eslint-disable-next-line camelcase
export default GET_One_USER;
