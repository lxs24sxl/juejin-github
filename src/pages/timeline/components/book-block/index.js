import React from 'react';
import { BookBlockWrapper } from './style';
import { res } from './data';

const list = res.d.data;

function BookBlock() {

  const toBook = (item, e) => {
    let url = `//juejin.im/book/${item._id}`
    if (e.target.className.indexOf('try-read') > -1) {
      url = `${url}/section/${item.section[0]}`
    }
    window.open(url, '_blank')
  }

  return (
    <BookBlockWrapper className="book-block">
      <header className="book-block-title">
        你可能感兴趣的小册
      </header>
      <div className="book-block-body">
        <ul className="block-list">
          {
            list && list.length 
              ? list.map(item => {
                return (
                  <li 
                    key={item._id} 
                    className="block-item" 
                    onClick={(e) => toBook(item, e)}>
                    <div className="poster">
                      <img src={item.img} alt={item.title}></img>
                    </div>
                    <div className="info">
                      <div className="title">{item.title}</div>
                      <div className="bought">
                        <div className="num">{item.buyCount}人已购买</div>
                        <div className="try-read">试读</div>
                      </div>
                    </div>
                  </li>
                )
              })
              : null
          }
          
        </ul>
      </div>
    </BookBlockWrapper>
  )
}

export default BookBlock;