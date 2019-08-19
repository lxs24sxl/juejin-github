import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  height: 0.6rem;
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  &.visible {
    transform: translateZ(0) !important;
  }
  &.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all .2s;
    transform: translate3d(0,-100%,0);
  }

  .container {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .app-header__logo {
      width: auto;
      height: auto;
      margin-right: 0.24rem;
    }
    
    .app-header__menus {
      display: flex;
      margin-left: 5px;
      height: 100%;
    }
  }
`;