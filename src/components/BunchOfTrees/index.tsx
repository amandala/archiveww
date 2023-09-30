import Image from "next/image";

import tree from "/public/assets/Tree_1.png";
import tree2 from "/public/assets/Tree_2.png";
import tree3 from "/public/assets/Tree_3.png";

import styles from "./index.module.scss";

export default function BunchOfTrees() {
  return (
    <div className={styles.TreeWrapper}>
      <Image
        className={styles.SmallHiddenTree}
        alt="A nice tree"
        src={tree}
        priority
        style={{
          objectFit: "contain",
          maxWidth: 800,
          margin: "0 auto",
          width: "100%",
          height: "auto",
          position: "absolute",
          bottom: 0,
          left: "-10%",
        }}
      />
      <Image
        className={styles.SmallHiddenTree}
        alt="A nice tree"
        src={tree}
        priority
        style={{
          objectFit: "contain",
          maxWidth: 600,
          margin: "0 auto",
          width: "100%",
          height: "auto",
          position: "absolute",
          bottom: 0,
          left: "10%",
        }}
      />
      <Image
        alt="A nice tree"
        src={tree2}
        priority
        style={{
          objectFit: "contain",
          maxWidth: 700,
          margin: "0 auto",
          width: "100%",
          height: "auto",
          position: "absolute",
          bottom: 0,
          left: "-20%",
        }}
      />
      <Image
        alt="A nice tree"
        src={tree2}
        priority
        style={{
          objectFit: "contain",
          maxWidth: 700,
          margin: "0 auto",
          width: "100%",
          height: "auto",
          position: "absolute",
          bottom: 0,
          right: "-20%",
        }}
      />
      <Image
        alt="A nice tree"
        src={tree3}
        priority
        style={{
          objectFit: "contain",
          maxWidth: 800,
          margin: "0 auto",
          width: "100%",
          height: "auto",
          position: "absolute",
          bottom: 0,
          right: "-10%",
        }}
      />
      <Image
        className={styles.SmallHiddenTree}
        alt="A nice tree"
        src={tree}
        priority
        style={{
          objectFit: "contain",

          maxWidth: 500,
          margin: "0 auto",
          width: "100%",
          height: "auto",
          position: "absolute",
          bottom: 0,
          right: "10%",
        }}
      />
    </div>
  );
}
