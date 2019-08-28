import styled from 'styled-components';

export const StyledEntryList = styled.ul`
  display: flex;
  flex-direction: column;

  .entry-item {
    padding: 0.24rem 0.18rem;
    border-bottom: 1px solid rgba(178,186,194,.15);
    transition: all .3s;
    cursor: pointer;
    
    // 最外层鼠标移入
    &:hover {
      background-color: rgba(0,0,0,.01);

      // 分享按钮显示
      .entry-box {
        .entry-box-row {
          &.action-row {
            .action-list {
              .action-item {
                .share {
                  visibility: visible;
                }
              }
            }
          }
        }
      }
    }

    .entry-box {
      display: flex;
      flex-direction: column;

      .entry-box-row {
        display: flex;

        // 额外属性
        &.meta-row {
          font-size: 0.12rem;
          color: #b2bac2;
          
          .entry-box-item {
            &:not(:last-child) {
              &:after {
                content: "·";
                margin: 0 .4em;
                color: #b2bac2;
              }
            }
          }
          .post {
            font-weight: 500;
            color: #b71ed7;
          }
          
          .username, .tag {
            a {
              color: #b2bac2;
              &:hover {
                color: #007fff;
              }
            }
          }
        }
        // 文章标题
        &.title-row {
          margin: .06rem 0 0.12rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          a {
            font-size: 0.16rem;
            color: #2e3135;
            &:visited {
              color: #909090;
            }
            &:hover {
              text-decoration: underline;
            }
          }
        }
        
        // 动作
        &.action-row {
          .action-list {
            display: flex;
            height: 0.24rem;
  
            .action-item {
              display: flex;
              align-items: center;
              justify-content: center;
              color: #b2bac2;
              border-radius: 1px;
              border: 1px solid #edeeef;
              padding: 0 0.1rem;
              line-height: 1;
              white-space: nowrap;
              height: 100%;
  
              &__count {
                color: #b2bac2;
                margin-left: .04rem;
                font-weight: 700;
              }
  
              &.share {
                visibility: hidden;
              }
            }
          }
        }
      }
    }
  }
`
