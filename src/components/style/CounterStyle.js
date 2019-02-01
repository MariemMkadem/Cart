import styled from 'styled-components';

const Count = styled.table`
.stepper-input {
  display: flex;
  display: 100%;
  color: #666;
  max-width: 120px;
  margin: 0 auto;
  text-align : center;
  .increment,
  .decrement {
    height: 24px;
    width: 24px;
    border: 1px solid #ccc;
    text-align: center;
    box-sizing: border-box;
    border-radius: 50%;
    text-decoration: none;
    color: inherit;
    font-size: 24px;
    line-height: 22px;
    -moz-user-select: none;
    -webkit-user-select: none;
    &:hover {
      color: #077915;
      border-color: #077915;
    }
    &:active {
      color: $white;
      border-color: #077915;
      background: lighten(#077915, 15%);
    }
  }
  .quantity {
    height: 24px;
    width: 48px;
    text-align: center;
    margin: 0 12px;
    border-radius: 2px;
    border: 1px solid ;
    &:focus {
      outline: none;
      border-color: #077915;
    }
  }
}

 `;

export default Count ;