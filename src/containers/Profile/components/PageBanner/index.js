import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'components';

const PageBanner = props => {
  // Compute Percentage of filled profile values to expected ones
  // And display progress bar is not 100%

  const { info, onEdit, onClose, elsewhere, mainHeading, editHeading } = props;

  // Add 1 for elsewhere key

  const keys = Object.keys(info).length + 1;
  let filledValues = Object.values(info).filter(
    value => !isEmptyProperty(value)
  ).length;

  // Add 1 to value if elsewhere is not 0 indicating that some elsewhere fileds are filled

  if (elsewhere) filledValues++;

  const percentage = Math.round((filledValues / keys) * 100);

  if (percentage < 100) {
    return (
      <ProgressBar
        percentage={percentage}
        onEdit={onEdit}
        onClose={onClose}
        mainHeading={mainHeading}
        editHeading={editHeading}
      />
    );
  } else {
    return null;
  }
};

const isEmptyProperty = property => {
  return (
    property === undefined ||
    property === null ||
    (typeof property === 'object' && Object.keys(property).length === 0) ||
    (typeof property === 'string' && property.trim().length === 0)
  );
};

PageBanner.propTypes = {
  info: PropTypes.object.isRequired,
  mainHeading: PropTypes.string.isRequired,
  editHeading: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default PageBanner;
