import React from 'react';
import { useParams } from 'hooks';
import { Switch, Route } from 'react-router-dom';

import TagManage from 'components/tag-manage';
import TimelineView from './components/timeline-view';

import { StyleTimeLine } from './style.js';

function TimeLine(props) {
  const params = useParams();

  return (
    <StyleTimeLine className="timeline">
      <TagManage></TagManage>
      
      {/* <Link to={`/timeline/${params.type}/test`}>{params.type}</Link> */}

      <div className="container timeline-container">
        <Switch>
          <Route path="/timeline/*/*" render={() => {
            return (
              <TimelineView type={params.type} ></TimelineView>
              // <div>
              //   三级路径 - {params.type}
              //   <Link to={`/timeline/${params.type}`}>/timeline/android</Link>
              // </div>
            )
          }}></Route>

          <Route path="/timeline/*" render={() => {
            return (
              <TimelineView type={params.type} ></TimelineView>
            )
          }}></Route>
        </Switch >
      </div>
    </StyleTimeLine >
  )
}

export default TimeLine;
