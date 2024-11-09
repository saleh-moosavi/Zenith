import CommentItem from "./CommentItem";

export default function Comment() {
  return (
    <div className="mt-10">
      <article className="text-center">
        <h3 className="text-xl font-bold">
          What <span className="text-orange-500">Clients</span> Say
        </h3>
        <p className="w-72 mx-auto mt-2 text-stone-500/70 text-sm font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        </p>
      </article>
      <article className="grid grid-cols-1 md:grid-cols-3 md:max-w-7xl md:mx-auto gap-3 my-10 justify-items-center mx-2 md:odd:*:scale-95">
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </article>
    </div>
  );
}
