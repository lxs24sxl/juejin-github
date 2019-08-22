import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center; 
  height: 100%;
`;

export const Item = styled.li`
  padding: 0 0.1rem;
  height: 100%;
  display: flex;
  align-items: center;

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`;