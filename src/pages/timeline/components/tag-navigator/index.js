import React, { useState, useEffect } from 'react';
import NavList from './nav-list';
import { Icon } from 'antd';
import { StyledNavItem } from './nav-item/style';

function TagNavigator(props) {
  const [expendAll, setExpendAll] = useState(false);

  // watch props.list
  useEffect(() => {
    setExpendAll(false)
  }, [props.list])

  const expendList = (e) => {
    setExpendAll(!expendAll)
  }


  const ExpendBtn = () => {

    if (!expendAll) {
      return (
        <StyledNavItem>
          <div className="nav-item-btn" onClick={expendList}>
            展开
            <Icon style={{ marginLeft: '3px' }} type="caret-down" />
          </div>
        </StyledNavItem>
      )
    }
    return null
  }
  
  return (
    <NavList list={expendAll ? props.list : props.list.slice(0, 8)} showAll>
      {ExpendBtn()}
    </NavList>
  )
}

export default TagNavigator;