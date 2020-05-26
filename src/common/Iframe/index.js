import React from "react";

const Iframe = ({
  className,
  src,
  title,
  width,
  height,
  frameBorder,
  allow,
  allowFullScreen,
}) => (
  <iframe
    className={className}
    src={src}
    title={title}
    width={width}
    height={height}
    frameBorder={frameBorder}
    allow={allow}
    allowFullScreen={allowFullScreen}
  />
);

export default Iframe;
