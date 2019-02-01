import gql from 'graphql-tag';

export default gql`
  query GetPhotos {
  photo @client {
_id
url
title
price
quantityStock

  }
}
`;
