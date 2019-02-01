/* eslint-disable react/prop-types */
/* eslint-disable radix */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import { Mutation, compose } from 'react-apollo';
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
// Set true to force full page refreshes

class FormPhoto extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    photo: PropTypes.object,
    history: PropTypes.func,
  };

  static defaultProps = {
    photo: {},
  };

  state = {
    // eslint-disable-next-line no-underscore-dangle
    id: this.props.photo._id || '',
    url: this.props.photo.url || '',
    title: this.props.photo.title || '',
    price: this.props.price || 0,
    quantityStock: this.props.quantityStock || 0,

  };

  handleInput = (e) => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };
  handlePrice = (e) => {
    this.setState({ price: Number(e.target.value) });
  };
  handleQuantity = (e) => {
    this.setState({ quantityStock: Number(e.target.value) });
  };

  render() {
    const { onSubmit, history } = this.props;
    const { classes } = this.props;
    const {
      url, title, price, id, quantityStock,
    } = this.state;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            ADD photo
          </Typography>
          <Mutation mutation={UPDATE_NETWORK_STATUS}>
            {
              (updateNetworkStatus) => (
                <form
                  className={classes.form}
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit({
                      variables: {
                        input: {
                          url,
                          title,
                          price,
                          quantityStock,
                        },
                        id,
                      },
                    })
                      .then(async () => {
                        await updateNetworkStatus();
                        history.push('/photos');
                      })
                      .catch((e));
                  }}
                >

                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="url"> url </InputLabel>
                    <Input
                      name="url"
                      type="text"
                      onChange={this.handleInput}
                      value={url}
                      placeholder="Enter the URL"
                      autoComplete="url"
                      autoFocus
                    />

                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="title"> title </InputLabel>
                    <Input
                      name="title"
                      type="text"
                      onChange={this.handleInput}
                      value={title}
                      placeholder="Enter the Title"
                      autoComplete="title"
                      autoFocus
                    />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="price"> price </InputLabel>
                    <Input
                      name="price"
                      type="text"
                      onChange={this.handlePrice}
                      value={price}
                      placeholder="Enter the price"
                      autoComplete="price"
                      autoFocus
                    />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="quantityStock"> quantityStock </InputLabel>
                    <Input
                      name="quantityStock"
                      type="Number"
                      onChange={this.handleQuantity}
                      value={quantityStock}
                      placeholder="Enter the quantityStock"
                      autoComplete="quantityStock"
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
              )}
          </Mutation>
        </Paper>
      </main>
    );
  }
}
export default compose(withStyles(styles), withRouter)(FormPhoto);
