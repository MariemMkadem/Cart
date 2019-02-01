import React from 'react';
import { Query } from 'react-apollo';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import UpdateUser from '../UpdateUser/UpdateUser';
// eslint-disable-next-line camelcase
import GET_One_USER from '../../../gql/user/queries/getOneUser';
const styles = (theme) => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const User = ({ match }) => console.log(match)|| (


  <Query
    query={GET_One_USER}
    variables={{
      id: match.params.id,
    }}
  >
    {({ data, loading }) => {
      if (loading) return <p>loading</p>;
      console.log('data',data)
      const { user } = data;
      //console.log('User', user)
      return (
        <React.Fragment>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                {user.firstName}
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            {/* Hero unit */}
            <div>
              <table border="0" cellPadding="0" cellSpacing="0">
                <div>
                  <h1>Edit User</h1>
                  <h1>{user.lastName}</h1>
                  <UpdateUser user={user} />
                </div>
              </table>
            </div>
          </main>
        </React.Fragment>
      );
    }}
  </Query>
);

User.propTypes = {
  match: PropTypes.object.isRequired,
};
export default withStyles(styles)(User);
