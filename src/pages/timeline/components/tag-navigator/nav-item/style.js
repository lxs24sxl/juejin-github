import styled from 'styled-components';

export const StyledNavItem = styled.div`
  cursor: pointer;

  padding: 0 0.1rem;
  height: 0.24rem;
  margin-right: 0.1rem;
  margin-bottom: 0.1rem;
  color: #8a9aa9;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.12rem;
  position: relative;

  &.active {
    background-color: #007fff;
    color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05), 0 1px 2px 0 rgba(0,0,0,.05);
    .nav-item-btn {
      color: #fff;
    }
    &:hover {
      .nav-item-btn {
        color: #fff;
      }
    }
  }

  .nav-item-btn {
    color: #909090;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color .1s;

    &:hover {
      color: #007fff;
    }
    &:active {
      color: #fff;
    }
    &::before {
      position: absolute;
      left: 0;
      top; 0;
      bottom: 0;
      right: 0;
    }
  }
`