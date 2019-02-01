import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose, Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import UPDATE_NETWORK_STATUS from '../../../gql/cache/updateNetworkStatus';

const styles = (theme) => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },


  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});
class FormRegister extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.func,
  };
  state = {
    email: '',
    password: '',
  };
  handleInput = (e) => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };
  render() {
    const { onSubmit, history } = this.props;
    const { classes } = this.props;
    const { email, password, id } = this.state;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Login </Typography>
          <Mutation mutation={UPDATE_NETWORK_STATUS} >
            {
              (updateNetworkStatus) => (
                <form
                  className={classes.form}
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit({
                      variables: {
                        input: {
                          email,
                          password,
                        },
                        id,
                      },
                    })
                      .then(async ({ data: { login } }) => {
                        localStorage.clear();
                        await updateNetworkStatus();
                        history.push('/photos');
                        localStorage.setItem('token', login.token);
                      })
                      .catch((e));
                  }}
                >
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email"> email </InputLabel>
                    <Input
                      name="email"
                      type="text"
                      onChange={this.handleInput}
                      value={email}
                      placeholder="email"
                      autoComplete="email"
                      autoFocus
                    />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password"> password </InputLabel>
                    <Input
                      name="password"
                      type="password"
                      onChange={this.handleInput}
                      value={password}
                      placeholder="password"
                      autoComplete="password"
                      autoFocus
                    />
                  </FormControl>
                  <a href="/Register"> Dont Registred ? Create an account </a>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >Connexion
                  </Button>
                </form>
              )}
          </Mutation>
        </Paper>
      </main>
    );
  }
}
FormRegister.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default compose(withStyles(styles), withRouter)(FormRegister);
