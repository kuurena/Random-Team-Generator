import React, { useState } from "react";
import generateTeams from "./logic";

export default function AddFixedTeam({
  teamNumber,
  noTeam,
  setShowModal,
  setResult,
}) {
  const [forms, setForms] = useState([]);

  const addForm = () => {
    setForms([...forms, []]);
  };

  const deleteForm = (index) => {
    const delForm = [...forms];
    delForm.splice(index, 1);
    setForms(delForm);
  };

  const handleChange = (event, index) => {
    const newForms = [...forms];
    newForms[index].text = event.target.value;
    setForms(newForms);
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

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center h-[95%]"
    >
      <div className="flex justify-end gap-5 mb-5 p-5 w-full">
        <div></div>
        <button
          type="button"
          onClick={addForm}
          className="bg-threeDs-lightYellow rounded-2xl text-threeDs-darkPinkShadow/80 text-base p-4
          drop-shadow-[5px_5px_1px_rgba(221,235,236,0.8)] shadow-[inset_-5px_-5px_5px_rgba(251,213,184,1)]
         hover:scale-[99%] hover:translate-x-[2px] hover:translate-y-[2px] hover:drop-shadow-[2px_2px_1px_rgba(221,235,236,1)] 
         duration-300 "
        >
          <p className="drop-shadow-[3px_3px_1px_rgba(250,209,173,1)]">
            Add fixed group
          </p>
        </button>
        <button
          onClick={() => setShowModal(true)}
          type="submit"
          className="bg-threeDs-darkPink flex justify-center items-center
          rounded-2xl  text-base p-4
          drop-shadow-[5px_5px_1px_rgba(221,235,236,0.8)] shadow-[inset_-5px_-5px_5px_rgba(238,105,88,1)]
         hover:scale-[99%] hover:translate-x-[2px] hover:translate-y-[2px] hover:drop-shadow-[2px_2px_1px_rgba(221,235,236,0.5)] 
         duration-300 animate-bounce hover:animate-none"
        >
          <p className="drop-shadow-[3px_3px_1px_rgba(238,105,88,0.90)]">
            Random
          </p>
        </button>
      </div>
      <div
        className="flex flex-wrap bg-threeDs-darkYellow rounded-2xl w-[80%] h-full gap-10 p-5 justify-center
      drop-shadow-[5px_5px_5px_rgba(0,0,0,0.20)] shadow-[inset_-5px_-5px_10px_rgba(252,119,114,0.5)]
     hover:scale-[99%] hover:translate-x-[2px] hover:translate-y-[2px] hover:drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] 
     duration-500 overflow-y-auto"
      >
        {forms.map((form, index) => (
          <div key={index} className="flex relative w-full md:w-[30%] h-[40%]">
            <textarea
              className="w-full h-full resize-none rounded-2xl bg-threeDs-lightYellow text-threeDs-darkPinkShadow text-base p-4
            drop-shadow-[5px_5px_1px_rgba(238,105,88,0.4)] shadow-[inset_-5px_-5px_5px_rgba(251,213,184,1)]
           hover:scale-[99%] hover:translate-x-[2px] hover:translate-y-[2px] hover:drop-shadow-[2px_2px_1px_rgba(238,105,88,0.6)] 
           duration-300 placeholder:text-threeDs-darkPink
           focus:outline-none focus:ring focus:ring-threeDs-lightPinkShadow"
              placeholder="Fixed group"
              value={form.text || ""}
              onChange={(e) => handleChange(e, index)}
            />
            <button
              className="absolute -bottom-2 -right-2 bg-threeDs-lightPink flex justify-center items-center
          rounded-lg  text-base p-4 h-3 w-20 text-threeDs-darkPinkShadow
          drop-shadow-[5px_5px_2px_rgba(252,119,114,0.6)] shadow-[inset_-5px_-5px_5px_rgba(250,209,173,1)]
         hover:scale-[99%] hover:translate-x-[2px] hover:translate-y-[2px] hover:drop-shadow-[2px_2px_1px_rgba(252,119,114,0.5)] 
         duration-300"
              onClick={() => deleteForm(index)}
            >
              <p className="drop-shadow-[3px_3px_0_rgba(250,209,173,1)]">
                delete
              </p>
            </button>
          </div>
        ))}
      </div>
    </form>
  );
}
