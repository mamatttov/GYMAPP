import SectionWrapper from "./SectionWrapper";
import { WORKOUTS, SCHEMES } from "./utils/swoldier";
import { useState } from "react";
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
  const [showModal, setShowModal] = useState(false);
  const [poison, setPoison] = useState("individual");
  const [muscle, setMuscle] = useState([]);
  const [goals, setGoals] = useState("strength_power");

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
              onClick={() => setPoison(type)}
              className={
                "bg-slate-950 py-3 rounded-lg border duration-200 hover:border-blue-600" +
                (type === poison
                  ? " border-blue-600 bg-white/5 "
                  : " border-blue-400 ")
              }
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
      <div className="bg-slate-950 p-3 border border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          onClick={() => {
            setShowModal(!showModal);
          }}
          className="relative flex items-center justify-center cursor-pointer"
        >
          <p>Select muscle groups</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && <div>Modal Content</div>}
      </div>
      <Header
        index={"03"}
        title={"Become juggernaut"}
        description={"Select your ultimate objective"}
      />
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => setGoals(scheme)}
              className={
                "bg-slate-950 py-3 rounded-lg border duration-200 hover:border-blue-600" +
                (scheme === goals
                  ? " border-blue-600 bg-white/5 "
                  : " border-blue-400 ")
              }
              key={schemeIndex}
            >
              <p className="uppercase">{scheme.replace("_", " ")}</p>
            </button>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
