import PageHead from "@/components/PageHead";
import UnderConstruction from "@/components/UnderConstruction";

// export default function FourOhFour() {
//   return (
//     <>
//       <div className={styles.Wrapper} style={{backgroundImage: `url(${background.src})`}}>
//         <h1 className={cx(chunkyHeart.className, styles.Number)}>404</h1>
//         <h2 className={cx(dinCondensed.className, styles.Heading)}>
//           Nothing to see here!
//         </h2>
//         <div className={styles.ButtonWrapper}>
//           <Button href="/">Go back home</Button>
//         </div>
//       </div>
//     </>
//   );
// }

export default function FourOhFour() {
  return (
    <>
      <PageHead
        page="404"
        image="https://drive.google.com/uc?export=view&id=1tu5gOcH9hPoUD0chnC1H_7aI00DrJmi3&v=2"
        description="Page not found."
        url="wickedwoods.ca"
      />
      <UnderConstruction />
    </>
  );
}
