import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

const Button = ({ 
  onClick, 
  containerClassName,
  className, 
  buttonText, 
  isIcon, 
  iconName, 
  disabled
}) => {
  return !isIcon ? (
    <button onClick={onClick} className={className} disabled={disabled}><div>{buttonText}</div></button>
  ) : (
    <button onClick={onClick} disabled={disabled} style={disabled ? { opacity: .55 } : {}}>
      <div className={containerClassName}>
        <Icon className={className} iconName={iconName} />
      </div>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  isIcon: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProp = {
  buttonText: "",
  isIcon: false,
  disabled: false
};

export default Button;