import React from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import { useWindowScroll } from 'react-use';
import { StyledSection } from './style'

function TagManage() {
  const { y } = useWindowScroll();

  const sectionClassName = classNames({
    'tag-manage': true,
    'fixed-tag-manage': true,
    'top': y >= 235
  });

  return (
    <StyledSection className={sectionClassName}>
      <div className="container">
        <div className="tag-manage__left">

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