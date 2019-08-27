import React from 'react';
import { Divider } from 'antd';
import classNames from 'classnames';
import { UL, Nav, LI } from './style';
import VoLink from 'components/vo-link';
import { useStore, useDispatch, useSelector, connect } from 'react-redux'


function ListNav(props) {
  // const store = useStore();
  const dispatch = useDispatch();
  

  const oSort = useSelector(state => state.timeline.sort);
  const changeSort = (sort) => {

    dispatch({
      type: 'SORT_UPDATE',
      data: {
        sort
      }
    })

    // console.log('sort', sort, oSort);

    // console.log('store', store, store.getState(), dispatch)
  }
  const activeClassName = (sort) => {
    return classNames({
      'active': oSort === sort,
    });
  };
  
  return (
    <Nav>
      <UL>
        <LI onClick={() => changeSort('popular')}>
          {/* {oSort} */}
          <VoLink className={activeClassName('popular')}>热门</VoLink>
        </LI>
        <Divider type="vertical" />
        <LI onClick={() => changeSort('newest')}>
          <VoLink  className={activeClassName('newest')}>最新</VoLink>
        </LI>
        <Divider type="vertical" />
        <LI onClick={() => changeSort('three_days_hottest')}>
          <VoLink  className={activeClassName('three_days_hottest')}>热榜</VoLink>
        </LI>
      </UL>
    </Nav>
  )
}

// export default connect(state => ({
//   sort: state.timeline.sort
// }))(ListNav);

export default ListNav;