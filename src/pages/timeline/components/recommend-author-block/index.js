import React from 'react';
import { res } from './data';
import { Avatar } from 'antd';
import { StyledRecommendAuthorBlock } from './style';

const list = res.data.recommendationCard.items.slice(0, 3)

function RecommendAuthorBlock() {
  const switchTo = (item, e) => {
    window.open(`//juejin.im/user/${item.author.id}`, '_blank')
  }

  const toRecommendation = (e) => {

    e.stopPropagation();

    e.preventDefault();

    window.open('//juejin.im/recommendation/authors/recommended', '_blank')
  }
  return (
    <StyledRecommendAuthorBlock className="recommend-author-block">
      <header className="user-block-header">
        <span role="img" aria-label="Ranking">🎖️</span>
        作者榜
      </header>
      <ul className="user-list">
        {
          list.map((item, index) => {
            return (
              <li
                className="item"
                key={item.id}
                onClick={(e) => switchTo(item, e)}>
                <div className="link">
                  <div className="avatar">
                    <Avatar
                      size="large"
                      style={{ width: '45px', height: '45px' }}
                      src={item.author.avatarHd || item.author.avatarLarge}>
                    </Avatar>

                  </div>
                  <div className="user-info">
                    <div className="username">{item.author.username}</div>
                    <div className="position">{item.author.jobTitle + ' @ ' + item.author.company}</div>
                    <div className="description">{item.description}</div>
                  </div>
                </div>
              </li>
            )
          })
        }
        <li
          className="item"
          onClick={(e) => toRecommendation(e)}
          >
          <div className="more">
            完整榜单
          </div>
        </li>
      </ul>
    </StyledRecommendAuthorBlock>
  )
}

export default RecommendAuthorBlock;