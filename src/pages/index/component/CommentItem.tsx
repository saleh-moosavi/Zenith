import { BiSolidStar } from "react-icons/bi";

export default function CommentItem() {
  return (
    <div className="p-4 flex flex-col gap-y-3 rounded-md shadow-[0_0_10px_#000000AF] -z-10">
      <section className="flex items-center gap-x-3">
        <img
          className="w-9 h-9 object-cover rounded-full"
          src="https://aio-film.ir/wp-content/uploads/2022/11/All-Quiet-on-the-Western-Front.jpg"
          alt=""
        />
        <div>
          <h4 className="text-sm font-bold text-orange-500">John Wick</h4>
          <p className="text-xs font-semibold text-stone-500">Main Actor</p>
        </div>
      </section>
      <p className="text-xs font-bold text-stone-500 lg:w-72">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        molestias nostrum iure aliquid blanditiis.
      </p>
      {/* Stars */}
      <ul className="flex gap-x-[0.15rem] hover:*:text-orange-500 *:transition-all *:duration-300 *:cursor-pointer">
        <li>
          <BiSolidStar className="size-3" />
        </li>
        <li>
          <BiSolidStar className="size-3" />
        </li>
        <li>
          <BiSolidStar className="size-3" />
        </li>
        <li>
          <BiSolidStar className="size-3" />
        </li>
        <li>
          <BiSolidStar className="size-3" />
        </li>
      </ul>
    </div>
  );
}
