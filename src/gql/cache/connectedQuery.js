import gql from 'graphql-tag';
const connectedQuery = gql`
query connectQuery {
isConnect @client
}
`;
export default connectedQuery;

