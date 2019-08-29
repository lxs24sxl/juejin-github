import styled from 'styled-components';

export const StyledRecommendAuthorBlock = styled.div`
  background-color: #fff;

  .user-block-header {
    width: 100%;
    padding: 0.12rem 0.15rem;
    border-bottom: 1px solid hsla(0,0%,59.2%,.1);
  }
  .user-list {
    display: flex;
    flex-direction: column;

    .item {
      width: 100%;
      cursor: pointer;
      transition: all .3s;

      &:hover {
        background-color: hsla(0,0%,84.7%,.1);
      }
      
      .more {
        color: #007fff;
        padding: 0.12rem 0;
        text-align: center;
        border-top: 1px solid hsla(0,0%,59.2%,.1);
      }

      .link {
        padding: 0.12rem 0.15rem;
        display: flex;
        align-items: center; 
        
        .avatar {
          display: flex;
          align-items: center;
          margin-right: 0.09rem;
        }

        .user-info {
          width: calc(100% - 54px);
          .username {
            font-size: 0.14rem;
            font-weight: 400;
            color: #333;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 3px;
          }
          .position, .description {
            width: 100%;
            color: #909090;
            font-size: 0.12rem;
            margin-bottom: 3px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
`;