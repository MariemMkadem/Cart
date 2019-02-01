import gql from 'graphql-tag';
const GET_ALL_PHOTO = gql`
 query listphoto {
   photos {
     _id
     url
     title
     price
     quantityStock
   }
 }
`;
export default GET_ALL_PHOTO;

