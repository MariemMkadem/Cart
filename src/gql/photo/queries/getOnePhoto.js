import gql from 'graphql-tag';
const GET_One_PHOTO = gql`
 query photo ($id:ID!) {
   photo (id: $id) {
     _id
     url
     title
     price
     quantityStock
   }
 }
`;
export default GET_One_PHOTO;