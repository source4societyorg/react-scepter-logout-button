import PropTypes from 'prop-types';
export const defaultProps = {
  logoutPath: '/login',
  className: 'logout-button',
  buttonText: 'Log Out',
};
export const propTypes = {
  logoutPath: PropTypes.string,
  buttonText: PropTypes.string,
  className: PropTypes.string,
};
