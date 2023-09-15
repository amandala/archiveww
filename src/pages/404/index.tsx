import PageHead from "@/components/PageHead";
import UnderConstruction from "@/components/UnderConstruction";

export default function FourOhFour() {
  return (
    <>
      <PageHead
        page="404 - Page Not Found"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Page not found. Visit wickedwoods.ca"
        url="wickedwoods.ca"
      />
      <UnderConstruction />
    </>
  );
}
