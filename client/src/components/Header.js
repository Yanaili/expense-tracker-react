import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ title }) => <h2>{title}</h2>;

Header.defaultProps = {
  title: 'Expense Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
};
