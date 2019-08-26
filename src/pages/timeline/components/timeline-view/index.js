import React, { Fragment } from 'react';
import {tagNavigatorRes} from './data';
import TagNavigator from '../tag-navigator';

function tagNavigatorManage (type) {
  if (Object.keys(tagNavigatorRes).includes(type) ) {
    return <TagNavigator type={type} list={tagNavigatorRes[type]}></TagNavigator>
  }
  return null
}

function TimelineView (props) {

  return (
    <Fragment>
      {tagNavigatorManage(props.type)}
      <div className="timeline-content">
        <div className="timeline-content-left">

        </div>
        <div className="timeline-content-right">

        </div>
      </div>
    </Fragment>
  )
}

export default TimelineView