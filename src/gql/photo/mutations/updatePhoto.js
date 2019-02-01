import gql from 'graphql-tag';
const UPDATE_PHOTO = gql`
  mutation updatePhoto($id: ID!, $input: photoInput!) {
    updatePhoto(id: $id, input : $input) {
      photo{
        url
        title
        price 
        quantityStock
      }
    }
  }
`;
export default UPDATE_PHOTO;
