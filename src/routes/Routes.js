import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Query } from 'react-apollo';
import PrivateRoute from './PrivateRoute';
import Photo from '../components/photos/photoDetail/Photo';
import Users from '../components/users/ListUsers/Users';
import User from '../components/users/UserDetail/User';
import Register from '../components/users/Register/Register';
import AddPhoto from '../components/photos/addphoto/AddPhoto';
import Login from '../components/users/Login/Login';
import listPhotos from '../components/photos/listPhotos/listPhoto';
import connectedQuery from '../gql/cache/connectedQuery';


function Routes() {
  return (
    <Query query={connectedQuery} >
      {
        ({ loading, error, data }) => {
          if (loading) return (<h4>loading...</h4>);
          if (error) return (`${error}`);
          const { isConnect } = data;
          return (
            <Router>
              <div>
                <PrivateRoute exact path="/photos" component={listPhotos} isConnect={isConnect} />
                <PrivateRoute exact path="/users" component={Users} isConnect={isConnect} />
                <Route path="/user/:id" component={User} />
                <Route path="/photo/:id" component={Photo}/>
                <PrivateRoute path="/update" component={Users} isConnect={isConnect} />
                <PrivateRoute path="/login" component={Login} isConnect={isConnect} />
                <PrivateRoute path="/addPhoto" component={AddPhoto} isConnect={isConnect} />
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} isConnect={isConnect} />

              </div>
            </Router>
          );
        }
      }
    </Query>
  );
}
export default (Routes);
