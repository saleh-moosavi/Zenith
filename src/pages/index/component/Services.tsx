import {
  BiChart,
  BiNetworkChart,
  BiPaperPlane,
  BiSearch,
} from "react-icons/bi";

import ServicesCard from "./ServicesCard";

export default function Services() {
  return (
    <section>
      <article className="text-center">
        <h3 className="text-xl font-bold">
          We Provide The Best <span className="text-orange-500">Services</span>
        </h3>
        <p className="w-64 mx-auto text-sm font-semibold text-stone-500 my-2">
          Lorem ipsum dolor sit adipisicing amet consectetur elit Dolore.
        </p>
      </article>
      <article className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 justify-items-center mx-10">
        <ServicesCard
          icon={<BiSearch />}
          color="orange"
          title="Search For Best"
        />
        <ServicesCard
          icon={<BiChart />}
          color="green"
          title="Safe Investment"
        />
        <ServicesCard
          icon={<BiNetworkChart />}
          color="purple"
          title="Perfect Networking"
        />
        <ServicesCard
          icon={<BiPaperPlane />}
          color="red"
          title="Great Notification"
        />
      </article>
    </section>
  );
}
