import HeroV2 from "@/components/herov2/HeroV2";
import ServicesOverview from "@/components/services/ServicesOverview";
import InspirationPreview from "@/components/inspiration/InspirationPreview";

export default function Home() {
  return (
    <>
      <HeroV2 />
      <main>
        <ServicesOverview />
        <InspirationPreview />
        {/*<Treatments />*/}
        {/*<About />*/}
        {/*<Location />*/}
        {/*<BookingWidget />*/}
      </main>
    </>
  );
}
