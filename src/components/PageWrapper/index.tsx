import React from "react";

import cx from "classnames";

import css from "./index.module.scss";

export const PageWrapper = ({
  children,
  className,
  style,
  props,
}: {
  children: React.ReactNode;
  className?: string;
  style?: { backgroundImage: string };
  props?: any;
}) => {
  return (
    <div className={cx(css.Wrapper, className)} style={style} {...props}>
      {children}
    </div>
  );
};
