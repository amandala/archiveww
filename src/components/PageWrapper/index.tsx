import React from "react";

import cx from "classnames";

import css from "./index.module.scss";

export const PageWrapper = ({
  children,
  className,
  props,
}: {
  children: React.ReactNode;
  className?: string;
  props?: any;
}) => {
  return (
    <div className={cx(css.Wrapper, className)} {...props}>
      {children}
    </div>
  );
};
