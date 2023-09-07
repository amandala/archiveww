import { dinBold } from "@/styles/fonts";
import styles from "./index.module.scss";
import cx from "classnames";

export function H4({ children }: { children: React.ReactNode }) {
  return <h4 className={cx(dinBold.className, styles.Four)}>{children}</h4>;
}
