import Image from "next/image";

import soldOut from "/public/assets/soldout.png";

import styles from "./index.module.scss";

export const SoldOutStamp = () => (
  <Image className={styles.SoldOut} src={soldOut} alt="Sold out" />
);
