import styled from 'styled-components';

export const DIV = styled.div`
  color: rgb(144, 144, 144);
  cursor: pointer;
  text-decoration: none;
  transition: all .3s;

  &:hover {
    color: rgb(0, 127, 255);
  }

  &.active {
    color: rgb(0, 127, 255);
  }

  &:active {
    color: rgb(0, 127, 255);
  }
`