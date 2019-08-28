import React, { Fragment } from 'react';
import moment from 'moment';
import { list } from './data';
import { Link } from 'react-router-dom';
import {StyledEntryList} from './style';

const currentList = list.reduce((result, item) => {
  result.push(item.node);
  return result;
}, [])

function EntryList() {
  
  const toPost = (originalUrl, e) => {
    if (e.target.className.indexOf('clickable') === -1) {
      window.open(`${originalUrl}`, '_blank')
    }
  }

  return (
    <StyledEntryList className="entry-list">
      {currentList && currentList.length ? currentList.map(item => {
        return (
          <li className="entry-item" key={item.id} >
            <div className="entry-box" onClick={(e) => toPost(item.originalUrl, e)}>
              <div className="entry-box-row meta-row">
                <div className="entry-box-item post">{item.summaryInfo ? '' : '专栏'}</div>
                <div className="entry-box-item username">
                  <Link 
                    className="clickable"
                    to={`//juejin.im/user/${item.user.id}`}
                    target="_blank">
                    {item.user.username}
                  </Link>
                </div>
                <div className="entry-box-item">{moment(new Date(item.lastCommentTime)).fromNow()}</div>
                <div className="entry-box-item tag">
                  {
                    item.tags && item.tags.length
                      ? item.tags.map((tag, index) => {
                        return (
                          <Fragment key={tag.id}> 
                            {index !== 0 ? <span>/</span> : null}
                            <Link 
                              className="clickable"
                              to={`//juejin.im/tag/${tag.title}`}
                              target="_blank">{tag.title}</Link>
                          </Fragment>
                        )
                      })
                    : null
                  }
                </div>
              </div>

              <div className="entry-box-row title-row">
                <Link className="clickable" to={`${item.originalUrl.replace(/(https:|http:)/, '')}`} target="_blank">{item.title}</Link>
              </div>

              <div className="entry-box-row action-row">
                <ul className="action-list">
                  <li className="action-item like clickable">
                    <div className="action-item__icon">
                      <i className="iconfont icondianzan"></i>
                    </div>
                    <div className="action-item__count">{item.likeCount}</div>
                  </li>
                  <li className="action-item comment clickable">
                    <div className="action-item__icon">
                      <i className="iconfont iconpingjia"></i>
                    </div>
                    <div className="action-item__count">{item.commentsCount}</div>
                  </li>
                  <li className="action-item share clickable">
                    <div className="action-item__icon">
                      <i className="iconfont iconshangchuan"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        )
      }) : null
      }
    </StyledEntryList>
  )
}

export default EntryList;