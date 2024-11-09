import Button, { ButtonOut } from "../../../components/Button";
import SolutionsList from "./SolutionsList";

export default function Solutions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center items-center my-10 bg-orange-500/20 p-10">
      <img
        className="lg:max-w-lg"
        src="https://images.blush.design/xkbkKP1MtGitRIi1baxU?w=920&auto=compress&cs=srgb"
        alt=""
      />
      <article>
        <h3 className="text-lg md:text-xl font-bold">
          Simple <span className="text-orange-500">Solutions!</span>
        </h3>
        <p className="text-xs md:text-sm text-slate-500/70 md:w-64 line-clamp-3 font-medium mt-2">
          Lorem ipsum dolor sit amet consectetur elit. Autem odio rerum commodi,
          sequi voluptas suscipit perspiciatis numquam porro natus facilis id
          tenetur distinctio itaque dolor illo eligendi consectetur.
        </p>
        <div className="flex flex-col gap-y-5 mt-5">
          <SolutionsList title="Contact us" number={1} />
          <SolutionsList title="Consuit" number={2} />
          <SolutionsList title="Place Order" number={3} />
          <SolutionsList title="Payment" number={4} />
        </div>
        <div className="flex justify-between mt-5">
          <Button>Get Started</Button>
          <ButtonOut>Read More</ButtonOut>
        </div>
      </article>
    </div>
  );
}
