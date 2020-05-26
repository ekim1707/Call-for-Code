import React from "react";

const InputField = ({
  id,
  passableRef,
  className,
  onChange,
  value,
  placeholder,
  hasIcon,
  iconPosition,
  iconName,
  disabled,
  type,
  accept,
  style
}) => {
  let componentStyle = style;
  if (hasIcon) {
    switch (iconPosition) {
      case "right": 
      componentStyle = {
          ...componentStyle,
          background: `url('../../img/${iconName}.png') no-repeat`,
          backgroundSize: "auto 16px",
          backgroundPosition: "100% 10%",
          paddingRight: "20px"
        }
        break;
      default: {
        componentStyle = {
          ...componentStyle,
          background: `url('../../img/${iconName}.png') no-repeat`,
          backgroundSize: "27px 27px",
          backgroundPosition: "8px 16px",
          paddingLeft: "30px"
        }
        break;
      }
    }
  }
  return (
    <input
      id={id}
      ref={passableRef}
      className={className}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      accept={accept}
      style={componentStyle}
    />
  );
};

InputField.defaultProps = {
  disabled: false,
  passableRef: null,
};

export default InputField;
