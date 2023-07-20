import React, { useState } from "react";
import ResultsBits from "./components/resultsBits";
import AddFixedTeamBits from "./components/addFixedTeamBits";
import generateTeams from "./components/logic";

function EightBitsTheme() {
  const [teamNumber, setTeamNumber] = useState(1);
  const [noTeam, setNoTeam] = useState();
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState([]);
  const [forms, setForms] = useState([]);

  const addFixedGroup = () => {
    setForms([...forms, []]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let fixedTeams = [];
    let notInTeam = noTeam;
    let players = notInTeam.trim().split(/\s+/);

    forms.forEach((form) => {
      if (form.text) {
        const stringList = form.text.trim().split(/\s+/);
        fixedTeams.push(stringList);
      }
    });

    for (let i = 0; i < fixedTeams.length; i++) {
      for (let j = 0; j < fixedTeams[i].length; j++) {
        players.push(fixedTeams[i][j]);
      }
    }

    let teams = generateTeams(players, fixedTeams, teamNumber);

    setResult(teams);
  };

  const teamNumberChange = (e) => {
    setTeamNumber(e.target.value);
  };

  const noTeamChange = (e) => {
    setNoTeam(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="min-h-screen h-full w-screen flex items-center justify-center bg-space bg-bits-bg font-bits2 gap-6 
       text-bits-text text-3xl overflow-hidden flex-wrap p-10"
      >
        <div
          className="bg-bits-divBg border-8 border-bits-border w-full md:w-[40%] md:h-[70vh] 
        flex flex-col justify-start items-center px-4 gap-5 pb-3"
        >
          <h1 className="text-5xl">Team Generator</h1>

          <div className="pt-2 flex flex-col h-[55%]">
            <div className="flex justify-start w-full gap-4 items-center">
              <h2>NUMBER OF TEAM:</h2>
              <input
                type="number"
                placeholder="1"
                onChange={teamNumberChange}
                className="bg-bits-fillDullBlue text-2xl focus:outline-none focus:ring-1 focus:ring-bits-border 
                border-2 border-bits-border
                px-2 h-6 w-[4.5rem] placeholder:text-bits-text/40 placeholder:text-center text-center"
              />
            </div>
            <div className="flex justify-start items-center w-full gap-4 mb-5">
              <h2>ADD FIXED TEAM:</h2>
              <div className=" h-6 w-[4.5rem] flex justify-center">
                <button
                  onClick={addFixedGroup}
                  type="button"
                  className="bg-bits-deepBlue aspect-square h-6 flex items-center justify-center border-2 border-bits-text
                   hover:bg-bits-fillDullBlue duration-500"
                >
                  <span>+</span>
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-center h-full">
              <h2 className="text-3xl">NOT FIXED TEAM LIST</h2>
              <textarea
                placeholder="List"
                className="resize-none focus:outline-none focus:ring-2 focus:ring-bits-border 
                bg-transparent w-full h-full border-2 border-bits-border text-lg px-2"
                onChange={noTeamChange}
              ></textarea>
            </div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            type="submit"
            className="sumit-button"
          >
            Random Team
          </button>
        </div>
        <div
          className="bg-bits-divBg border-8 border-bits-border w-full md:w-[40%] h-[70vh] flex flex-col 
        items-center overflow-y-auto gap-3 relative"
        >
          {showModal == true ? (
            <ResultsBits setShowModal={setShowModal} result={result} />
          ) : null}
          <AddFixedTeamBits forms={forms} setForms={setForms} />
        </div>
      </form>
    </>
  );
}
export default EightBitsTheme;
