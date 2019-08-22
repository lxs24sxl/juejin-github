import React from 'react';
import './index.less';
import TagManage from 'components/tag-manage';

import { useParams } from 'hooks';

function TimeLine(props) {
  const params = useParams();
  return (
    <div className="timeline">
      <TagManage></TagManage>
      timeline-{ params.type }
  </div>
  )
}

export default TimeLine;
