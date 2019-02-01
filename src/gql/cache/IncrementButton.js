/* eslint-disable camelcase */
import gql from 'graphql-tag';
const IncrementButton = gql`
  mutation incrementCounter($id: ID) {
    incrementCounter(id :$id) @client
  }
`;
export default IncrementButton;
