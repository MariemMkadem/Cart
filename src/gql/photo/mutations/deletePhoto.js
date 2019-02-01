import gql from 'graphql-tag';

const DELETE_PHOTO = gql`
 mutation deletePhoto($id:ID!) {
   deletePhoto (id:$id){
    error
    success
   }
 }
`;
export default DELETE_PHOTO;
