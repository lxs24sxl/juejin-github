import React from 'react';
import { Divider } from 'antd';
import { UL, Nav, LI } from './style';
import VoLink from 'components/vo-link';

function ListNav () {
  return (
    <Nav>
      <UL>
        <LI>
          <VoLink className="active">热门</VoLink>
        </LI>
        <Divider type="vertical" />
        <LI>
          <VoLink>最新</VoLink>
        </LI>
        <Divider type="vertical" />
        <LI>
          <VoLink>热榜</VoLink>
        </LI>
      </UL>
    </Nav>
  )
}

export default ListNav;