import React, { Fragment } from 'react';
import { Divider } from 'antd';
import classNames from 'classnames';
import { UL, Nav, LI } from './style';
import VoLink from 'components/vo-link';
import {
  // useStore, 
  useDispatch,
  useSelector,
  // connect 
} from 'react-redux'
import { useLocation, useMount, useQuery } from 'hooks';

function ListNav(props) {
  // const store = useStore();
  const dispatch = useDispatch();

  // 获取query参数
  const { sort } = useQuery();

  // 排序
  const { navigate, location } = useLocation();

  // 全局属性
  const oSort = useSelector(state => state.timeline.sort);

  /**
   * 跳转路径
   * @param {String} sort 排序方式
   */
  const changeSort = (sort) => {

    // 派发redux
    dispatch({
      type: 'SORT_UPDATE',
      data: {
        sort
      }
    })

    // 改变路径
    navigate(`${location.pathname}?sort=${sort}`, { replace: true });

  }

  // 类名
  const activeClassName = (sort) => {
    return classNames({
      'active': oSort === sort,
    });
  };

  // 菜单列表
  const sortList = [
    { sort: 'popular', title: '热门' },
    { sort: 'newest', title: '最新' },
    { sort: 'three_days_hottest', title: '热榜' }
  ];

  // componentWillMounte事件
  useMount(() => {
    dispatch({
      type: 'SORT_UPDATE',
      data: {
        sort: sort || 'popular'
      }
    })
  })

  return (
    <Nav>
      <UL>
        {
          sortList.map((item, index) => {
            return (
              <Fragment key={item.sort}>
                {
                  index === 0
                    ? null
                    : <Divider type="vertical" />
                }

                <LI onClick={() => changeSort(item.sort)}>
                  <VoLink className={activeClassName(item.sort)}>
                    {item.title}
                  </VoLink>
                </LI>
              </Fragment>
            )
          })
        }
      </UL>
    </Nav>
  )
}

// export default connect(state => ({
//   sort: state.timeline.sort
// }))(ListNav);

export default ListNav;