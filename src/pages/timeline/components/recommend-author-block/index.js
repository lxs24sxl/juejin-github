import React from 'react';
import { res } from './data';
import { Avatar } from 'antd';
import { StyledRecommendAuthorBlock } from './style';

const list = res.data.recommendationCard.items

function RecommendAuthorBlock () {
  return (
    <StyledRecommendAuthorBlock className="recommend-author-block">
      <header className="user-block-header">
        <span role="img" aria-label="Ranking">🎖️</span>
        作者榜
      </header>
      <ul className="user-list">
        {
          list.map(item => {
            return (
              <li className="item">
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
      </ul>
    </StyledRecommendAuthorBlock>
  )
}

export default RecommendAuthorBlock;