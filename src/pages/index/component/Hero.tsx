import Button from "../../../components/Button";

export default function Hero() {
  return (
    <div className="h-screen w-screen grid grid-cols-1 md:grid-cols-2 justify-items-center items-center px-10 gap-x-5 mt-10">
      <article className="order-2 md:order-1 text-center md:text-left">
        <h3 className="text-3xl font-bold md:w-[15rem] my-5">
          We Create <span className="text-orange-400">Solutions</span> for your
          business
        </h3>
        <p className="text-sm md:text-lg font-medium text-stone-500 md:w-96 my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          molestias nostrum iure aliquid blanditiis.
        </p>
        <Button>Get Started</Button>
      </article>
      <img
        className="lg:max-w-lg max-w-96 order-1 md:order-2"
        src="https://images.blush.design/xkbkKP1MtGitRIi1baxU?w=920&auto=compress&cs=srgb"
        alt=""
      />
    </div>
  );
}
