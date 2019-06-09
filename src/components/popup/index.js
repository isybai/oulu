import React from 'react';
import './style.css';

export default function PopUp(props) {
  const { onClose } = props;
  return (
    <div className="pop">
      <div className="bg" onClick={onClose} />
      <div className="popup-body">
        <div className="pop-title">
          {props.title}{' '}
          <span className="close" onClick={onClose}>
            &#215;
          </span>
        </div>
        <div className="pop-content">{props.children}</div>
      </div>
    </div>
  );
}
