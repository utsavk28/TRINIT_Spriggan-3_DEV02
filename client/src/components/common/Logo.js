import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from 'assets/img/s3.png';

const Logo = ({ at, width, className, textClass, ...rest }) => {
  return (
    <Link
      to="/"
      className={classNames(
        'text-decoration-none',
        { 'navbar-brand text-left': at === 'navbar-top' }
      )}
      {...rest}
    >
      <div
        className={classNames(
          'd-flex',
          {
            'align-items-center': at === 'navbar-top',
            'flex-center fw-bolder fs-5 mb-4': at === 'auth'
          },
          className
        )}
      >
        <img className="me-2" src={logo} alt="Logo" width={60} />
        {/* <span className={classNames('font-sans-serif', textClass)}>falcon</span> */}
      </div>
    </Link>
  );
};

Logo.propTypes = {
  at: PropTypes.oneOf(['navbar-top', 'auth']),
  width: PropTypes.number,
  className: PropTypes.string,
  textClass: PropTypes.string
};

Logo.defaultProps = { at: 'auth', width: 58 };

export default Logo;
