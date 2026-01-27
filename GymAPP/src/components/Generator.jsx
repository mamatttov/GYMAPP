import SectionWrapper from "./SectionWrapper";
import { WORKOUTS } from "./utils/swoldier";
function Header(props) {
  const { title, index, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 justify-center">
        <p className="text-3xl  sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}
export default function Generator() {
  return (
    <SectionWrapper
      header={"Generate your workout"}
      title={["It's", "HUGE", "time"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              className="bg-slate-950 py-3 rounded-lg border border-blue-400 duration-200 hover:border-blue-600"
              key={typeIndex}
            >
              <p className="uppercase">{type.replace("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation"}
      />
      <div></div>
    </SectionWrapper>
  );
}
