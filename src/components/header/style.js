import styled from 'styled-components';

export const StyleHeader = styled.header`
  width: 100%;
  height: 0.6rem;
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  background-color: #fff;

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
    justify-content: space-between;
    .left, .right {
      display: flex;
      align-items: center;
    }

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

    .right {
      > * {
        margin: 0 10px;
      }

      .ant-btn-group {
        display: flex;

        .group-main {
          padding: 0 10px;
        }

        .ant-btn-icon-only {
          padding: 0 2px;
          font-size: 12px;
        }
      }

      .app-header__icon {
        font-size: 22px;
        cursor: pointer;
        &:hover {
          color: #007fff;
        }
      }

      .app-header__avatar {
        cursor: pointer;
      }
    }
  }
`;