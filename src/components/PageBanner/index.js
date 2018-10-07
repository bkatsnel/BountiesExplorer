import React from 'react';
import './PageBanner.css';

const PageBanner = props => {
  const { editHeading, onEdit, onClose } = props;

  return (
    <div className="navBar">
      {props.children}
      <span className="on_edit_text" onClick={onEdit}>
        Edit {editHeading}
      </span>
      <span className="float_right" onClick={onClose} />
    </div>
  );
};

export default PageBanner;
