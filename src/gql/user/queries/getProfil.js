import gql from 'graphql-tag';

const GET_PROFILE = gql`
  query profil($token: String) {
    profil(token: $token) {
      _id
      firstName
      email
    }
  }
`;
export default GET_PROFILE;