import gql from 'graphql-tag';

const ADD_PHOTO = gql`
 mutation createPhoto($input: photoInput!) {
createPhoto (input:$input){
      url
     title
     price
     quantityStock
     }
   
 }
`;
export default ADD_PHOTO;
