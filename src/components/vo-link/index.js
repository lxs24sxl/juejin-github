import React from 'react';
import { DIV } from './style';
import classNames from 'classnames';

function VoLink(props) {

  const DivClassName = classNames({
    'vo-link': true,
    [props.className]: props.className
  })

  return (
    <DIV className={DivClassName}>
      {props.children}
    </DIV>
  )
}

export default VoLink;