import React, { PureComponent } from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  align-items: center; 
`;

const Item = styled.li`
  margin-left: 10px;
`;


class NavList extends PureComponent {
  render () {
    return (
      <List className="nav-list">
        {
          (this.props.list || []).map(item => (
            <Item key={item.id}>
              {item.name}
            </Item>
          )
          )
        }
      </List>
    )
  }
  
}


export default NavList;