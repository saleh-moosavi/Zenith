type ServicesCardType = {
  icon: JSX.Element;
  color: string;
  title: string;
};

export default function ServicesCard(props: ServicesCardType) {
  return (
    <div className="my-5 shadow-[0_0_5px_#0000009F] rounded-md p-5 relative -z-10 overflow-hidden">
      <div
        className="*:w-8 *:h-8 *:text-white *:p-1 w-10 h-10 rounded-br-lg absolute -top-1 -left-1 rotate-6 flex justify-end items-end"
        style={{ backgroundColor: props.color }}
      >
        {props.icon}
      </div>
      <div className="mt-8">
        <h3 className="text-sm font-bold">{props.title}</h3>
        <p className="text-xs font-medium line-clamp-3 mb-2 mt-1">
          Lorem ipsum, dolor sit amet elit. nam dolores sit amet elit sit amet
          elit nam dolores sit amet elit sit amet elit nam dolores sit amet elit
          sit amet elit
        </p>
        <p className="text-xs font-medium text-stone-500">See More</p>
      </div>
    </div>
  );
}
