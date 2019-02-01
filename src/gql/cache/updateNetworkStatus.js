
import gql from 'graphql-tag';
const UPDATE_NETWORK_STATUS = gql`
mutation updateNetworkStatus($isConnected: Boolean) {
  updateNetworkStatus(isConnect: true) @client
}
`;
export default UPDATE_NETWORK_STATUS;
