import SunsetScene from "@/components/SunsetScene";
import PageHead from "@/components/PageHead";

export default function Home() {
  return (
    <>
      <PageHead
        page="Home"
        image="https://drive.google.com/uc?export=view&id=1tu5gOcH9hPoUD0chnC1H_7aI00DrJmi3"
        description="A three day arts and music festival located in the Colombia Valley just outside Fairmont BC, Canada."
        url="wickedwoods.ca"
      />
      <main>
        <SunsetScene />
      </main>
    </>
  );
}
