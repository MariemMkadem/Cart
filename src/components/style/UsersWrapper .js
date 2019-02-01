import styled from 'styled-components';

const User = styled.table`
margin: 0 auto;
font-family: 'Roboto', sans-serif;
border-spacing: 5px;
img {
  width: 20px;
}
tr:nth-child(odd) {
    background: #f1f1f1;
}
th {
    font-weight: 400;
    padding: 10px 25px;
}
.entete {
background: #d9d9d9 !important;
    color: #5a5a5a;
}
tr {
  text-align: center;
  text-transform: capitalize;
  td {
    padding: 0 30px;
  }
}
button {
  background: none;
    border: 0;
    :focus {
      outline: none;
    }
    :hover {
      background: none;
    }
}

 `;

export default User;
