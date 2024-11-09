import Button from "../../../components/Button";

export default function OurAgency() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 justify-items-center items-center px-10 gap-x-5">
      <article>
        <h3 className="text-3xl font-bold w-[15rem] my-5">
          Our <span className="text-orange-400">Agency</span>
        </h3>
        <p className="text-sm md:text-lg font-medium text-stone-500 w-64 md:w-96 my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          molestias nostrum iure aliquid blanditiis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ducimus molestias nostrum iure aliquid
          blanditiis.
        </p>
        <Button>Read More</Button>
      </article>
      <img
        className="lg:max-w-lg"
        src="https://images.blush.design/xkbkKP1MtGitRIi1baxU?w=920&auto=compress&cs=srgb"
        alt=""
      />
    </div>
  );
}
