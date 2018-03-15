import React from 'react';
import { Link } from 'react-router-dom';
import { defaultProps, propTypes } from './props';

const LogoutButton = ({ logoutPath, className, buttonText }) => (
  <Link to={logoutPath}><button className={className}>{buttonText}</button></Link>
);

LogoutButton.defaultProps = defaultProps;
LogoutButton.propTypes = propTypes;
export default LogoutButton;
