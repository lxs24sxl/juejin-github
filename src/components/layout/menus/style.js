import styled from 'styled-components';

export const StyleUl = styled.ul`
li {
  padding: 0 0.18rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 0.16rem;
    color: #71777c;
    
    ::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
}
`;