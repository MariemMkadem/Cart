import styled from 'styled-components';

const Nav = styled.div`
table, th {
  border-width:1px; 
 border-style:solid; 
 border-color:black;
 width:50%;}
 td {
  border-width:1px;
 border-style:solid; 
 border-color:red;
 width:50%;
 }
.cart {
  display: flex;
  display: -webkit-flex;
  margin-left: 64px;
  position: relative;
  z-index: 99;
  @media (max-width: 991px) {
    margin-left: 16px;
  }
}
.cart-info {
  margin-top :25px;
  @media (max-width: 991px) {
    display: none;
  }
}
.cart-preview.active {
  background : #fff
  z-index: 99;
  display: block;
  position: absolute;
  top: 48px;
  right: 0;
  width: 360px;
  height: 388px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 400px) {
    top: 45px;
    width: 100%;
    min-width: 300px;
    & > div {
      width: 100% !important;
    }
    .cart-items {
      width: 100%;
    }
    .stepper-input {
      a {
        display: none;
      }
    }
  }
}
.cart-preview {
  display: none;
  background: $white;
  border: 1px solid $gray-eighty;
  &:before {
    content: "";
    position: absolute;
    display: block;
    top: -9px;
    right: 8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid $gray-eighty;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    top: -7px;
    right: 9px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid $white;
    z-index: 1;
  }
}
header {
  background: #fff;
  padding: 0px 0px;
  box-shadow: 0px 8px 18px rgba(202, 202, 202, 0.36);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  animation: slideUp 300ms linear;
  .container {
    display: flex;
    display: -webkit-flex;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 32px;
  }
  @media (max-width: 991px) {
    padding: 16px;
    .container {
      padding: 0;
    }
  }
  @media (max-width: 480px) {
    padding: 8px 12px;
  }
}
@keyframes slideUp {
  0% {
    transform: translateY(30px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@media (min-width: 481px) {
  .mobile-search,
  .back-button {
    display: none;
  }
}
.cart {
  display: flex;
  display: -webkit-flex;
  margin-left: 64px;
  position: relative;
  z-index: 99;
  @media (max-width: 991px) {
    margin-left: 16px;
  }
}
.cart-info {
  @media (max-width: 991px) {
    display: none;
  }
}
.cart-info table {
  font-size: 14px;
  color: $primary-green;
  text-align: right;
  tr {
    padding: 0;
    margin: 0;
  }
  td {
    padding: 0 4px;
    line-height: 16px;
  }
}
.cart-icon {
  margin-left: 16px;
  z-index: 99;
  position: relative;
}
.cart-count {
  @media (min-width: 992px) {
    display: none;
  }
  @media (max-width: 991px) {
    display: block;
    position: absolute;
    background: $primary-orange;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    width: 24px;
    border-radius: 50%;
    top: -6px;
    right: -9px;
  }
}
.cart-preview {
  display: none;
  background: $white;
  border: 1px solid $gray-eighty;
  &:before {
    content: "";
    position: absolute;
    display: block;
    top: -9px;
    right: 8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid $gray-eighty;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    top: -7px;
    right: 9px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid $white;
    z-index: 1;
  }
}
.cart-preview.active {
  z-index: 99;
  display: block;
  position: absolute;
  top: 48px;
  right: 0;
  width: 360px;
  height: 388px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 400px) {
    top: 45px;
    width: 100%;
    min-width: 300px;
    & > div {
      width: 100% !important;
    }
    .cart-items {
      width: 100%;
    }
    .stepper-input {
      a {
        display: none;
      }
    }
  }
}
.cart-items {
  height: 320px;
  width: 360px;
}
.cart-item {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  padding: 8px;
  .product-image {
    width: 48px;
    height: 48px;
  }
  .product-info {
    margin-left: 16px;
    flex-grow: 1;
    .product-name {
      color:#000000;;
      font-size: 14px;
    }
    .product-price {
      color: #000000;
      font-weight: 700;
      &:before {
        content: "$ ";
      }
    }
  }
  .product-total {
    margin-left: 16px;
    .quantity {
      color:#000000;
      font-size: 14px;
      text-align: right;
    }
    .amount {
      color: #333;
      font-weight: 700;
      text-align: right;
      &:before {
        content: "$ ";
      }
    }
  }
  .product-remove {
    margin-left: 24px;
    height: 24px;
    line-height: 24px;
    width: 24px;
    font-size: 22px;
    color: #ccc;
    text-align: center;
    &:hover {
      color: $red;
    }
  }
  &:hover {
    background: rgba(147, 220, 156, 0.15);
  }
}
}
 `;
export default Nav ;