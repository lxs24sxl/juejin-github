import React from 'react';
import './index.less';
import TagManage from 'components/tag-manage';
import { useParams } from 'hooks';
import { Switch, Route, Link } from 'react-router-dom';

function TimeLine(props) {
  const params = useParams();

  return (
    <div className="timeline">
      <Link to={`/timeline/${params.type}/test`}>{params.type}</Link>

      <TagManage></TagManage>

      <Switch>
        <Route path="/timeline/*/*" render={() => {
          return (
            <div>
              三级路径 - {params.type}
              <Link to={`/timeline/${params.type}`}>/timeline/android</Link>
            </div>
          )
        }}></Route>

        <Route path="/timeline/*" render={() => {
          return (
            <div>
              timeline - {params.type}
            </div>
          )
        }}></Route>
      </Switch >
    </div >
  )
}

export default TimeLine;
