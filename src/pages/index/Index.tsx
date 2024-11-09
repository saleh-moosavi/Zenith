import Hero from "./component/Hero";
import OurAgency from "./component/OurAgency";
import Services from "./component/Services";
import Solutions from "./component/Solutions";

export default function Index() {
  return (
    <div>
      <Hero />
      <Services />
      <Solutions />
      <OurAgency />
    </div>
  );
}
