import gql from 'graphql-tag';

const GET_ALL_USERS = gql`
 query GET_ALL_USERS {
   users {_id
    firstName
	  lastName
	  email
	  password
	  photos{
		url
		title }
   }
 }
`;
export default GET_ALL_USERS;
