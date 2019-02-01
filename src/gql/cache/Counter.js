/* eslint-disable camelcase */
import gql from 'graphql-tag';
const Counter = gql`
  {
    counter @client {
    value   
    }
  }
`;
export default Counter;
