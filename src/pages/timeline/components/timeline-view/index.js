import React, { Fragment } from 'react';
import { tagNavigatorRes } from './data';
import TagNavigator from '../tag-navigator';
import ListHeader from '../list-header';
import EntryList from '../entry-list';
import { TimelineContent } from './style';
import RecommendAuthorBlock from '../recommend-author-block';
import BookBlock from '../book-block';
import propTypes from 'prop-types';

function tagNavigatorManage(type) {
  if (Object.keys(tagNavigatorRes).includes(type)) {
    return <TagNavigator type={type} list={tagNavigatorRes[type]}></TagNavigator>
  }
  return null
}

function TimelineView(props) {

  return (
    <Fragment>
      {tagNavigatorManage(props.type)}

      <TimelineContent className="timeline-content">
        <div className="timeline-content-left">
          <ListHeader></ListHeader>
          <EntryList></EntryList>
        </div>
        <div className="timeline-content-right">
          <RecommendAuthorBlock></RecommendAuthorBlock>
          <BookBlock></BookBlock>
        </div>
      </TimelineContent>
    </Fragment>
  )
}

TimelineView.propTypes = {
  type: propTypes.string
}

export default TimelineView