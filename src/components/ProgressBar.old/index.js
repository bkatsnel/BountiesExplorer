import React from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.css';

const ProgressBar = props => {
  const { mainHeading, editHeading, onEdit, onClose, percentage } = props;

  return (
    <div className="navBar">
      <span className="main_hdr">{mainHeading}</span>
      <div className="progress-bar">
        <Filler percentage={percentage} />
      </div>
      <span className="pct_indicator">{percentage}%</span>
      <span className="on_edit_text" onClick={onEdit}>
        Edit {editHeading}
      </span>
      <span className="float_right" onClick={onClose} />
    </div>
  );
};

const Filler = ({ percentage }) => {
  return <div className="filler" style={{ width: `${percentage}%` }} />;
};

ProgressBar.propTypes = {
  mainHeading: PropTypes.string.isRequired,
  editHeading: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ProgressBar;
