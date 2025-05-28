import HeroV2 from "@/components/herov2/HeroV2";
import ServicesOverview from "@/components/services/ServicesOverview";
import InspirationPreview from "@/components/inspiration/InspirationPreview";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import Location from "@/components/location/Location";

export default function Home() {
  return (
    <>
      <HeroV2 />
      <main>
        <ServicesOverview />
        <InspirationPreview />
        <MeetTheTeam />
        <Location />
        {/*<Treatments />*/}
        {/*<About />*/}
        {/*<BookingWidget />*/}
      </main>
    </>
  );
}
