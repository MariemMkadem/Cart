/* eslint-disable camelcase */
import gql from 'graphql-tag';

const Add_Selected_Photo = gql`
 mutation addPhoto($id:ID,$title: String ,$price: Int, $qte:Int) {
 addPhoto (title:$title, price:$price, qte: $qte, id:$id) @client
 {
	 id,
	 title,
	 price,
	 

 }
 }
`;
export default Add_Selected_Photo;
