import SunsetScene from "@/components/SunsetScene";
import PageHead from "@/components/PageHead";

export default function Home() {
  return (
    <>
      <PageHead
        page="Home"
        image="/assets/openGraph/Default_OG.jpg" //"https://drive.google.com/uc?export=view&id=1iLKmD6dn_beuWGj9DSJ2sJ0HeD4p0AIC&v=3"
        description="A three day arts and music festival located in the Colombia Valley just outside Fairmont BC, Canada."
        url="wickedwoods.ca"
      />
      <main>
        <SunsetScene />
      </main>
    </>
  );
}
