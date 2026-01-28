export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="px-8 py-4 mx-auto rounded-medium border-2 bg-slate-90 border-blue-400 border-solid blueShadow duration-200"
    >
      <p>{text}</p>
    </button>
  );
}
