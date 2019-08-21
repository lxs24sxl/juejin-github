import React from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import { useWindowScroll, useList, useEffectOnce } from 'hooks';
import { StyledSection } from './style'
import NavList from '../nav-list';
import { res } from './data';
let categoryList = res.d.categoryList;



function TagManage() {

  const { y } = useWindowScroll();

  const sectionClassName = classNames({
    'tag-manage': true,
    'fixed-tag-manage': true,
    'top': y >= 235
  });

  const [list, { set: setList }] = useList([]); // 默认数组有8个

  useEffectOnce(() => {
    categoryList.unshift({
      id: new Date().getTime(),
      name: '推荐',
      title: '',
      weight: '00'
    })
    setList(categoryList); 
  });

  return (
    <StyledSection className={sectionClassName}>
      <div className="container">
        <div className="tag-manage__left">
          <NavList list={list}></NavList>
        </div>
        <div className="tag-manage__right">
          <Button type="link">
            标签管理
          </Button>
        </div>
      </div>
    </StyledSection>
  )
}

export default TagManage;