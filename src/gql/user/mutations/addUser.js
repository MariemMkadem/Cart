import gql from 'graphql-tag';

const ADD_USER = gql`
 mutation createUser($input: userInput!) {
createUser (input: $input){  
  firstName
  lastName
	email
	password
	}
 }
`;
export default ADD_USER;
