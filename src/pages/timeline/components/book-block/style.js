import styled from 'styled-components';

export const BookBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-top: 20px;
  
  .book-block-title {
    width: 100%;
    padding: 0.12rem 0.15rem;
    border-bottom: 1px solid hsla(0,0%,59.2%,.1);
  }

  .book-block-body {
    width: 100%;

    .block-list {
      display: flex;
      flex-direction: column;

      .block-item {
        padding: 0.12rem 0.15rem;
        display: flex;
        transition: all .3s;
        cursor: pointer;

        &:hover {
          background-color: #f8f8f8;
        }
        .poster {
          margin-right: 10px;
          flex-shrink: 0;
          height: 72px;
          width: 52px;
          box-shadow: 0 2px 7px 0 rgba(0,0,0,.26);
          img {
            width: 100%;
            height: 100%;
          }
        }

        .info {
          flex-grow: 1;

          .title {
            max-height: 52px;
            font-size: 14px;
            font-weight: 500;
            line-height: 1.3;
            margin-bottom: 5px;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }

          .bought {
            display: flex;
            justify-content: space-between;

            .num {
              font-size: 12px;
              color: #878c90;
            }

            .try-read {
              height: 20px;
              color: #fff;
              font-size: 12px;
              padding-left: 5px;
              line-height: 20px;
              padding-right: 5px;
              border-radius: 2px;
              background-color: #007fff;
              display: flex;
              align-items: center;

              &:after {
                width: 0;
                height: 0;
                content: "";
                display: inline-block;
                margin-left: 3px;
                border-color: transparent transparent transparent #fff;
                border-style: solid;
                border-width: 3px 0 3px 3px;
              }
            }
          }
        }
      }
    }
  }

`