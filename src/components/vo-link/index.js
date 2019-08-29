import React from 'react';
import { DIV } from './style';
import classNames from 'classnames';
import propTypes from 'prop-types';

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

VoLink.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.element,
    propTypes.number
  ]),
  className: propTypes.string
}

export default VoLink;