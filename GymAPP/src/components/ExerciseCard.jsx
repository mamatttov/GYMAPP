import React, { useState } from "react";

export default function ExerciseCard(props) {
  const [setsCompleted, setSetsCompleted] = useState(0);
  const { exercise, i } = props;
  function handleIncrement() {
    setSetsCompleted((setsCompleted + 1) % 6);
  }
  return (
    <div className="bg-slate-950 p-4 rounded-md flex flex-col gap-4 sm:flex-wrap">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl lg:text-6xl text-slate-400 font-semibold">
          0{i + 1}
        </h4>
        <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium flex-1 sm:text-center">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-slate-400 capitalize">{exercise.type}</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-slate-400 text-sm">Muscle groups</h3>
        <p className="capitalize">{exercise.muscles.join(" & ")}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:items-center ">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              info={info}
              className="flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full"
            >
              <h3 className="capitalize text-slate-400 text-sm">
                {info === "reps" ? `${exercise.unit}` : info}
              </h3>
              <p className="font-medium">{exercise[info]}</p>
            </div>
          );
        })}
        <button
          onClick={handleIncrement}
          className="flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600 w-full"
        >
          <h3 className="text-slate-400 text-sm capitalize">
            {" "}
            Sets Completed
            <p className="font-medium">{setsCompleted} /5</p>
          </h3>
        </button>
      </div>
    </div>
  );
}
