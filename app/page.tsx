import ServicesOverview from "@/components/services/ServicesOverview";
import InspirationPreview from "@/components/inspiration/InspirationPreview";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import Location from "@/components/location/Location";
import PriceCalculator from "@/components/calculator/PriceCalculator";

export default function Home() {
  return (
    <>
      <main>
        <PriceCalculator />
        <ServicesOverview withHeader={true}/>
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
