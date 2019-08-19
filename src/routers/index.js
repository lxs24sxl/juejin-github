import React from 'react';
import Loadable from 'react-loadable';

const menus = [
  { title: '首页', page: 'index', exact: true },
  { title: '沸点', page: 'pins'},
  { title: '话题', page: 'topic'},
  { title: '小册', page: 'books'},
  { title: '活动', page: 'actions'},
];

function wrapComponent(page) {
  return Loadable({
    loader: () => import(/* webpackExclude: /components/ */`../pages/${page}/index.js`),
    loading: () => <div>loading</div>,
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
