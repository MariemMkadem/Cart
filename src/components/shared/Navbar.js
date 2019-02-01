/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
/* eslint-disable react/no-string-refs */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import CartScrollBar from './CartScrollBar';
import Get_Selected_Photo from '../../gql/cache/GetSelectedPhoto';
import EmptyCart from './EmptyCart';
import Delete_Photo from '../../gql/cache/DeletePhoto';
import Nav from '../style/NavStyle';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,

    };
  }
  handleCart = (e) => {
    e.preventDefault();
    this.setState({
      showCart: !this.state.showCart,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    const { count } = this.props;
    return (
      <Nav>
        <header>
          <div className="container">
            <Toolbar>
              <Link to="/photos"> <Button>Acceuil</Button> </Link>
              <Link to="/users"><Button>Utilistaeurs</Button> </Link>
              <Link to="/addPhoto"><Button>Add photo</Button> </Link>
              <Link to="/"><Button>Log out</Button></Link>
            </Toolbar>

            <div className="cart">
              <a
                className="cart-icon"
                href="#"
                onClick={this.handleCart}
                ref="cartButton"
              >
                <img
                  style={{ width: '75px', height: '75px' }}
                  src="https://secure.webtoolhub.com/static/resources/icons/set28/1f5694d2.png"

                  alt="Cart"
                />
                {this.state.totalItems ? (
                  <span className="cart-count">{this.state.totalItems}</span>
                ) : (
                  '')}
              </a>
              <div
                className={
                  this.state.showCart ? 'cart-preview active' : 'cart-preview'
                }
                ref="cartPreview"
              >
                <CartScrollBar>
                  <Query query={Get_Selected_Photo} RefetchPolicy="network-only" >
                    {
                      ({ loading, error, data }) => {
                        if (loading) return (<h4>loading...</h4>);
                        if (error) return (`${error}`);
                        const photo = data.selectedPhotos;
                        console.log(data);
                        if (photo.length <= 0) { return (<EmptyCart />); }
                        return photo.map((ph) => (
                          <li className="cart-item" key={ph.title}>
                            <img className="product-image" src={ph.url} />
                            <div className="product-info">
                              <p className="product-name">{ph.title}</p>
                              <p className="product-price">{ph.price}</p>
                            </div>
                            <div className="product-total">
                              <p className="quantity">
                                {count} {count > 1 ? 'qte.' : 'No.'}{''}
                              </p>
                              <p className="amount">{count * ph.price}</p>
                            </div>

                            <Mutation
                              mutation={Delete_Photo}
                            >
                              {(deletePhoto) => (
                                <a
                                  className="product-remove"
                                  href="#"
                                  onClick={() => {
                                    deletePhoto({});
                                  }}
                                >
                                  ×
                                </a>
                              )}
                            </Mutation>
                          </li>
                        ));
                      }}
                  </Query>
                </CartScrollBar>
              </div>
            </div>
          </div>
        </header>
      </Nav>);
  }
}
Navbar.propTypes = {
  count: PropTypes.object.isRequired,
};
export default (Navbar);
