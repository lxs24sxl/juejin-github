import React, { useMemo } from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import { useWindowScroll, useList, useEffectOnce } from 'hooks';
import { StyledSection } from './style'
import NavList from './nav-list';

import { res } from './data';
let categoryList = res.d.categoryList;
categoryList.unshift({
  id: new Date().getTime(),
  name: '推荐',
  title: 'recommended',
  weight: '00'
})


function TagManage() {

  const { y } = useWindowScroll();

  const sectionClassName = classNames({
    'tag-manage': true,
    'fixed-tag-manage': true,
    'top': y >= 235
  });

  const [list, { set: setList }] = useList([]); // 默认数组有8个

  useEffectOnce(() => {
    setList(categoryList); 
  });

  const navList = useMemo(() => <NavList list={list}></NavList>, [list]);

  return (
    <StyledSection className={sectionClassName}>
      <div className="container">
        <div className="tag-manage__left">
          {navList}
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