import React from 'react';
import NavItem from '../nav-item';
import { StyledNavList } from './style';
import { useLocation } from 'hooks';

const isActive = (currentPathName, name) => {
  return currentPathName.split(/(\/|\?)/).includes(name)
}

function renderHeader(currentPathName, type) {
  const data = {
    title: '全部',
    tagId: '2333' + Math.random() * 100
  }
  
  return (
    <NavItem 
      className={currentPathName === `/timeline/${type}`? 'active' : ''}
      data={data}
      type={type}>
    </NavItem>
  )
}

function NavList(props) {
  const { location: {
    pathname: currentPathName
  } } = useLocation();

  return (
    <StyledNavList className="nav-list tag-list">

      {props.showAll ? renderHeader(currentPathName,props.type) : null}

      {
        props.list.map((data) =>
          <NavItem
            className={isActive(currentPathName, data.title) ? 'active' : ''}
            type={props.type}
            data={data}
            key={data.tagId}></NavItem>
        )
      }
      {props.children}
    </StyledNavList>
  )
}

export default NavList;