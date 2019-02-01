/* eslint-disable camelcase */
import gql from 'graphql-tag';
const decrementtButton = gql`
  mutation decrementCounter {
    decrementCounter @client
  }
`;
export default decrementtButton;
