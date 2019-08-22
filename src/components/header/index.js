import React, { useRef } from 'react';
import Menus from 'components/menus';
import logo from 'assets/images/logo-full.svg';
import classnames from 'classnames';
import { StyleHeader } from './style'
import { useWindowScroll } from 'hooks';
import { Input, Dropdown, Button, Icon, Avatar, Menu } from 'antd';
import { useLocation } from 'hooks';

const Header = () => {
  const ButtonGroup = Button.Group;

  const { y } = useWindowScroll();

  const headerClassName = classnames({
    'app-header': true,
    'fixed-header': true,
    'visible': y <= 235
  });

  const AVATAR_SRC = "https://user-gold-cdn.xitu.io/2017/10/18/49b79c1c40e5ef11bedcc09ca067bae6?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1";

  const curPath = useRef('');
  const { location } = useLocation();
  const { pathname } = location;
  curPath.current = pathname;
  
  const menu = (
    <Menu>
      <Menu.Item key="1">
        发布沸点
      </Menu.Item>
      <Menu.Item key="2">
        分享链接
      </Menu.Item>
    </Menu>
  );
  
  return (
    <StyleHeader className={headerClassName}>
      <div className="container">
        <div className="left">
          <img
            src={logo}
            className="app-header__logo"
            alt="logo">
          </img>

          <Menus className="app-header__menus" current={curPath.current}></Menus>
        </div>
        <div className="right">
          <Input.Search
            style={{ width: 156 }}
            placeholder="搜索掘金" />

          <ButtonGroup className="app-header__btn-group">
            <Button className="group-main" type="primary">写文章</Button>
            <Dropdown 
              overlay={menu} 
              trigger={[ 'click' ]} 
              placement="bottomCenter">
              <Button className="group-icon" type="primary" icon="down"></Button>
            </Dropdown>
          </ButtonGroup>

          <Icon className="app-header__icon" type="bell" theme="filled" />

          <Avatar
            className="app-header__avatar"
            src={AVATAR_SRC} />

        </div>
      </div>
    </StyleHeader>
  )
}

export default Header;