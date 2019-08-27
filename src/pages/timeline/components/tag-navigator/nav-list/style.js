import styled from 'styled-components';

export const StyledNavList = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  opacity: 0;
  transition: all .3s;
  
  &.active {
    opacity: 1;
  }
`;