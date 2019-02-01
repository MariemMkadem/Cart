import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';
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
// Set true to force full page refreshes
const HISTORY = createHistory({
  forceRefresh: true,
});
class FormRegister extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    user: PropTypes.object,
  };
  static defaultProps = {
    user: {},
  };
  state = {
    id: this.props.user.id || '',
    firstName: this.props.user.firstName || '',
    lastName: this.props.user.lastName || '',
    email: this.props.user.email || '',
    password: this.props.user.password || '',
  };
  handleInput = (e) => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };
  render() {
    const { onSubmit } = this.props;
    const { classes } = this.props;
    const {
      firstName, lastName, email, password, id,
    } = this.state;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form
            className={classes.form}
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit({
                variables: {
                  input: {
                    firstName,
                    lastName,
                    email,
                    password,
                  },
                  id,
                },
              })
                .then(() => HISTORY.push('/users'))
                .catch((e));
            }}
          ><FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="firstName"> FirstName </InputLabel>
            <Input
              name="firstName"
              type="text"
              onChange={this.handleInput}
              value={firstName}
              placeholder="firstName"
              autoComplete="firstName"
              autoFocus
              /> </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="lastName"> lastName </InputLabel>
              <Input
                name="lastName"
                type="text"
                onChange={this.handleInput}
                value={lastName}
                placeholder="lastName"
                autoComplete="lastName"
                autoFocus
              />
            </FormControl>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Envoyer
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
FormRegister.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormRegister);
