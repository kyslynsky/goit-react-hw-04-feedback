import styled, { css } from 'styled-components';

export const RateButton = styled.button`
  width: 8vw;
  padding: 5px;
  text-transform: capitalize;
  font-weight: 700;
  background-color: transparent;
  outline: 0;
  border: 2px solid rgba(25, 118, 210, 0.5);
  border-radius: 5px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    background-color: #1976d2;
    color: #fff;
  }

  &:first-of-type:hover,
  &:first-of-type:focus {
    background-color: #7ab4ad;
    color: #fff;
    border: 2px solid #7ab4ad;
  }

  &:last-child:hover,
  &:last-child:focus {
    background-color: tomato;
    color: #fff;
    border: 2px solid tomato;
  }
`;
