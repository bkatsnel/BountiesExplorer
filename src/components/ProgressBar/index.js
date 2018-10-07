import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.css';

const ProgressBar = props => {
  const { mainHeading, percentage } = props;

  return (
    <Fragment>
      <span className="main_hdr">{mainHeading}</span>
      <div className="progress-bar">
        <Filler percentage={percentage} />
      </div>
      <span className="pct_indicator">{percentage}%</span>
    </Fragment>
  );
};

const Filler = ({ percentage }) => {
  return <div className="filler" style={{ width: `${percentage}%` }} />;
};

ProgressBar.propTypes = {
  mainHeading: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};

export default ProgressBar;
