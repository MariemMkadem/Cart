import gql from 'graphql-tag';

const LOGIN_USER = gql`
 mutation login($input: loginInput) {
login (input:$input){
     token 
	 user { email}
   }
 }
`;
export default LOGIN_USER;
