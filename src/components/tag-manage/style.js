import Styled from 'styled-components';

export const StyledSection = Styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  background-color: #fff;
  
  height: 0.46rem;

  .container {
    display: flex;
    justify-content: space-between;
  }

  &.fixed-tag-manage {
    position: fixed;
    width: 100%;
    position: fixed;
    top: 0.6rem;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    transition: all .2s;
    transform: translateZ(0);
  }

  &.top {
    transform: translate3d(0,-0.6rem,0) !important;
  }
`;