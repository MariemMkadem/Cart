/* eslint-disable camelcase */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import GET_ALL_USERS from '../../../gql/user/queries/getAllUsers';
import DELETE_User from '../../../gql/user/mutations/deleteUser';

const UsersWrapper = styled.table`
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

class Users extends React.Component {
  render() {
    return (
      <UsersWrapper >
        <tr className="entete">
          <th> FirstName</th>
          <th> LastName</th>
          <th> Email </th>
          <th> Update</th>
          <th> Delete</th>
        </tr>
        <Query query={GET_ALL_USERS} fetchPolicy="network-only" >
          {({ data, loading }) => {
            if (loading) return 'Loading...';
            const { users } = data;
            return users.map((user) =>
              (

                <tr>
                  <td className="first-name">{user.firstName} </td>
                  <td className="last-name">{user.lastName} </td>
                  <td className="email">{user.email} </td>
                  <td className="edit"> <Link to={`/user/${user._id}`}>
                    <Button><img src="edit.svg" alt="" /></Button>
                  </Link>
                  </td>
                  <td className="delete"> <Link to="/users">
                    <Mutation
                      mutation={DELETE_User}
                      refetchQueries={[{ query: GET_ALL_USERS }]}
                    >
                      {(deleteUser) => (
                        <button
                          type="button"
                          className="transparent"
                          onClick={() => {
                            deleteUser({
                              variables: {
                                id: user._id,
                              },
                            });
                          }}
                        >
                          <img src="delete.svg" alt="" />
                        </button>
                      )}
                    </Mutation>
                  </Link>
                  </td>
                </tr>

              ));
          }}
        </Query>
      </UsersWrapper>
    );
  }
}
export default (Users);
