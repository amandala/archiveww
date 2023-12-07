import Image from "next/image";

import lowStock from "/public/assets/low_stock.png";

import styles from "./index.module.scss";

export const LowStockStamp = () => (
  <Image className={styles.LowStock} src={lowStock} alt="Low Stock" />
);
