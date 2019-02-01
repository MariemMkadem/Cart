/* eslint-disable camelcase */
import gql from 'graphql-tag';

const Get_Selected_Photo = gql`
query getSelectedPhoto{
selectedPhotos @client 
 }
`;
export default Get_Selected_Photo;
