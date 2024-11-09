type SolutionsListType = {
  number: number;
  title: string;
};

export default function SolutionsList(props: SolutionsListType) {
  return (
    <div>
      <article className="flex gap-x-5 items-center">
        <div className="w-9 h-9 rounded-full bg-orange-500 flex justify-center items-center text-white font-bold">
          {props.number}
        </div>
        <div>
          <h3 className="text-sm font-bold">{props.title}</h3>
          <p className="text-xs font-semibold text-stone-500">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </article>
    </div>
  );
}
