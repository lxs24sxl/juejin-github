import React from 'react';
import Loadable from 'react-loadable';
import { Skeleton } from 'antd';
const menus = [
  { 
    title: '首页', 
    page: 'timeline', 
    params: 'type',
    default: 'recommended'
  },
  { title: '沸点', page: 'pins'},
  { title: '话题', page: 'topics'},
  { title: '小册', page: 'books'},
  { title: '活动', page: 'actions'},
];

function wrapComponent(page) {
  return Loadable({
    loader: () => import(/* webpackExclude: /components/ */`../pages/${page}/index.js`),
    loading: () => <Skeleton active />,
  });
}
const routers = [];

function node(nodes, parentTitles = []) {
  // eslint-disable-next-line
  nodes.map(({ page, title, children }) => {
    if (page) {
      routers.push({
        component: wrapComponent(page),
        path: [...parentTitles, title],
        page: `/${page}`,
      });
    } else if (children) {
      node(children, [...parentTitles, title]);
    }
  });
}
node(menus);

export default routers;
export { menus };
