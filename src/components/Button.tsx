type ButtonType = {
  children: string;
};

export default function Button(props: ButtonType) {
  return (
    <button className="px-3 py-1 text-white text-sm font-semibold bg-orange-500 shadow-md shadow-orange-200 hover:shadow-orange-500 rounded-md transition-all duration-300 inline-block">
      {props.children}
    </button>
  );
}

export function ButtonOut(props: ButtonType) {
  return (
    <button className="px-3 py-1 text-orange-500 text-sm font-semibold border-2 border-orange-500 shadow-md shadow-orange-200 hover:shadow-orange-500 rounded-md transition-all duration-300 inline-block">
      {props.children}
    </button>
  );
}
