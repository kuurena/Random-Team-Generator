import React, { useState } from "react";
import generateTeams from "./jest2";

export default function AddFixedTeam({ teamNumber, noTeam }) {
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
    console.log("Team A: ", teams[0]);
    console.log("Team B: ", teams[1]);
    console.log("Team C: ", teams[2]);
    console.log("Team D: ", teams[3]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-5 mb-5">
        <button type="button" onClick={addForm}>
          Add fix group
        </button>
        <button type="submit">Random team</button>
      </div>
      {forms.map((form, index) => (
        <div key={index}>
          <span>Fixed group: {index}</span>
          <textarea
            value={form.text || ""}
            onChange={(e) => handleChange(e, index)}
          />
          <button onClick={() => deleteForm(index)}>delete</button>
        </div>
      ))}
    </form>
  );
}
