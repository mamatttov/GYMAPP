import React from "react";
import SectionWrapper from "./SectionWrapper";
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
        title={"Select your workout"}
        description={
          "Choose a workout plan based on your goals and preferences"
        }
      />
    </SectionWrapper>
  );
}
