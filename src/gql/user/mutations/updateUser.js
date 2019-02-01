import gql from 'graphql-tag';

const UPDATE_USER = gql`
 mutation updateUser($id:ID!,$input: userInput!) {
updateUser (id: $id , input: $input){
user {
	_id
	firstName
    lastName
	password
	email
	}
   }
 }
`;
export default UPDATE_USER;
