import React, { useState } from "react";
import AddFixedTeam from "./components/addFixedTeam";
import Result from "./components/result";

function App() {
  const [teamNumber, setTeamNumber] = useState(1);
  const [noTeam, setNoTeam] = useState();
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState();

  const teamNumberChange = (e) => {
    setTeamNumber(e.target.value);
  };

  const noTeamChange = (e) => {
    setNoTeam(e.target.value);
  };

  return (
    <>
      <div className="h-screen w-full flex items-center px-[15%] bg-threeDs-bg font-sans text-xl overflow-hidden">
        <div
          className="bg-gradient-to-br from-threeDs-darkPink via-threeDs-darkPink to-threeDs-darkPinkShadow/60 
          flex flex-col w-96 h-[70%] p-8 pt-14 rounded-2xl justify-end 
          drop-shadow-[15px_20px_15px_rgba(238,105,88,0.4)] shadow-[inset_-8px_-8px_15px_rgba(238,105,88,0.5)]
          hover:scale-[99%] hover:translate-x-[1px] hover:translate-y-[1px] duration-700
          hover:drop-shadow-[2px_2px_2px_rgba(238,105,88,0.8)]"
        >
          <div className="">
            <p className="drop-shadow-[3px_3px_1px_rgba(238,105,88,0.90)] mb-2">
              Number of team
            </p>
            <input
              className="h-10 w-full bg-threeDs-lightYellow rounded-2xl text-threeDs-darkPinkShadow text-base p-4
              drop-shadow-[5px_5px_1px_rgba(238,105,88,0.4)] shadow-[inset_-5px_-5px_5px_rgba(251,213,184,1)]
               hover:scale-[99%] hover:translate-x-[2px] hover:translate-y-[2px] hover:drop-shadow-[2px_2px_1px_rgba(238,105,88,0.6)] 
               duration-500
               focus:outline-none focus:ring focus:ring-threeDs-lightPinkShadow"
              onChange={teamNumberChange}
            ></input>
          </div>
          <div className="h-[60%] mt-16">
            <p className="drop-shadow-[3px_3px_1px_rgba(238,105,88,0.90)] mb-2">
              Not fixed team list
            </p>
            <div className="w-full h-72 rounded-2xl pt-3 pl-3 pr-4 pb-4">
              <textarea
                className="w-full h-full resize-none rounded-2xl bg-threeDs-lightYellow text-threeDs-darkPinkShadow text-base p-4
                drop-shadow-[5px_5px_1px_rgba(238,105,88,0.4)] shadow-[inset_-5px_-5px_5px_rgba(251,213,184,1)]
               hover:scale-[99%] hover:translate-x-[2px] hover:translate-y-[2px] hover:drop-shadow-[2px_2px_1px_rgba(238,105,88,0.6)] 
               duration-500
               focus:outline-none focus:ring focus:ring-threeDs-lightPinkShadow "
                onChange={noTeamChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div
          className="bg-gradient-to-br from-threeDs-white via-threeDs-white to-threeDs-whiteShadow w-full h-[65%] 
        rounded-r-2xl drop-shadow-[10px_10px_20px_rgba(238,105,88,0.4)] shadow-[inset_10px_0_15px_rgba(0,0,0,0.15)]
        hover:scale-[99%] hover:translate-x-[-5px] hover:translate-y-[-1px] duration-1000 ease-in-out hover:drop-shadow-[2px_2px_2px_rgba(238,105,88,0.4)]"
        >
          <AddFixedTeam
            teamNumber={teamNumber}
            noTeam={noTeam}
            setShowModal={setShowModal}
            setResult={setResult}
          />
        </div>
      </div>
      {showModal ? (
        <Result setShowModal={setShowModal} result={result} />
      ) : null}
    </>
  );
}
export default App;
