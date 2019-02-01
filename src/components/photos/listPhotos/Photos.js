/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/first */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable func-names */
import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import GET_ALL_PHOTO from '../../../gql/photo/queries/getAllPhotos';
import Navbar from '../../shared/Navbar';
import DELETE_Photo from '../../../gql/photo/mutations/deletePhoto';
import styled from 'styled-components';
import Add_Selected_Photo from '../../../gql/cache/AddSelectedPhoto';
import Count from '../../style/CounterStyle';
import Get_Counter from '../../../gql/cache/Counter';
import IncrementButton from '../../../gql/cache/IncrementButton';
import decrementtButton from '../../../gql/cache/decrementButton';
const Btn = styled.div`
.product-action {
  padding: 20px;
  button {
    width: 100%;
    transition: all 300ms ease-in;
    &.added {
      background: #fc7710;
    }
  }
}

 `;
const styles = (theme) => ({
  card: {
    minWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});
const cStyle = {
  listStyleType: 'none',
  display: 'inline-block',
  verticalAlign: 'top',
};
const Styleimg = {
  minHeight: '260px',
  display: 'block',
  margin: '0 auto',
};

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdded: false,
    };
  }
  render() {
    const { classes, photo } = this.props;
    return (
      <Query query={Get_Counter} RefetchPolicy="network-only" >
        {({ loading, error, data }) => {
          if (loading) return (<h4>loading...</h4>);
          if (error) return (`${error}`);
          const count = data.counter;
          console.log(count)
          return (<div>
            <Navbar count={count.value} />
            <Grid >
              <ul style={cStyle}>
                <div className={(classes.layout, classes.cardGrid)} style={{ marginTop: '50px' }}>
                  <Card className={classes.card}>
                    <CardHeader
                      avatar={<Avatar aria-label="Recipe" className={classes.avatar}> {photo.quantityStock}</Avatar>}
                      action={<IconButton>{photo.price}$</IconButton>}
                      title={photo.title}
                    />
                    <Count>
                      <div className="stepper-input">
                        <Mutation mutation={decrementtButton}>
                          {
                            (decrementCounter) => (
                              <button
                                disabled={this.state.statu}
                                className="increment"
                                onClick={() => {
                                  decrementCounter({});
                                }}
                              > - </button>
                            )
                          }
                        </Mutation>
                        <input
                          type="number"
                          className="quantity"
                          value={count.value}
                        />
                        <Mutation mutation={IncrementButton}>
                          {
                            (incrementCounter) => (
                              <button
                                disabled={this.state.statu}
                                className="increment"
                                onClick={() => {
                                  incrementCounter({
                                    variables: {
                                      id: photo.id,
                                    },
                                  });
                                }}
                              > + </button>
                            )
                          }
                        </Mutation>
                      </div>
                    </Count>
                    <img src={photo.url} alt="ok" style={Styleimg} />
                    <CardActions>
                      <Link to={`/photo/${photo._id}`}>
                        <Button size="small" color="primary">
                          View
                        </Button>
                      </Link>
                      <Link to={`/photo/${photo._id}`} >
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </Link>
                      <Link to="/photos">
                        <Mutation
                          mutation={DELETE_Photo}
                          refetchQueries={[{ query: GET_ALL_PHOTO }]}
                        >
                          {(deletePhoto) => (
                            <Button
                              size="small"
                              color="primary"
                              type="button"
                              className="transparent"
                              onClick={() => {
                                deletePhoto({
                                  variables: {
                                    id: photo._id,
                                  },
                                });
                              }}
                            >
                              Delete
                            </Button>
                          )}
                        </Mutation>
                      </Link>
                    </CardActions>
                    <Btn>
                      <div className="product-action">
                        <Mutation mutation={Add_Selected_Photo}>
                          {
                            (addPhoto) => (
                              <Button
                                className={!this.state.isAdded ? '' : 'added'}
                                type="button"
                                onClick={() => {
                                  addPhoto({
                                    variables: {
                                      id: photo._id,
                                      title: photo.title,
                                      price: photo.price,
                                      qte: count.value,
                                    },
                                  });
                                }}
                              > {!this.state.isAdded ? 'ADD TO CART' : '✔ ADDED'}
                              </Button>
                            )}
                        </Mutation>
                      </div>
                    </Btn>
                  </Card>
                </div>
              </ul>
            </Grid>
          </div>
          );
        }}
      </Query>
    );
  }
}
Photos.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Photos);
