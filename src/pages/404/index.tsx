import PageHead from "@/components/PageHead";
import UnderConstruction from "@/components/UnderConstruction";

export default function FourOhFour() {
  return (
    <>
      <PageHead
        page="404 - Page Not Found"
        image="https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="Page not found. We've rebuilt our website and some urls have changed. Visit wickedwoods.ca for the most up to date information."
        url="wickedwoods.ca"
      />
      <UnderConstruction
        title="404"
        text="Page not found. We've rebuilt our website and some urls have changed."
      />
    </>
  );
}
