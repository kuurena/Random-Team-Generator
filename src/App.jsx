import React, { useState } from "react";
import AddFixedTeam from "./components/addFixedTeam";

function App() {
  const [teamNumber, setTeamNumber] = useState(1);
  const [noTeam, setNoTeam] = useState();

  const teamNumberChange = (e) => {
    setTeamNumber(e.target.value);
  };

  const noTeamChange = (e) => {
    setNoTeam(e.target.value);
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center gap-5">
        <div>
          <p>Number of team</p>
          <input
            className="h-10 w-44 bg-slate-100"
            onChange={teamNumberChange}
          ></input>
        </div>
        <div>
          <p>List of names with no fix team</p>
          <textarea
            className="h-44 w-44 bg-slate-100"
            onChange={noTeamChange}
          ></textarea>
        </div>
        <AddFixedTeam teamNumber={teamNumber} noTeam={noTeam} />
      </div>
    </>
  );
}
export default App;

/*import { useState } from "react";
function App() {
  const [fixTeamList, setFixTeamList] = useState([[]]);

  const click = () => {
    setFixTeamList([...fixTeamList, ""]);
  };
  return (
    <>
      <div className="h-screen w-full flex justify-center gap-5">
        <div>
          <button onClick={click} className="bg-pink-300">
            add
          </button>
          {fixTeamList.map((val, index) => (
            <div key={index}>
              <textarea
                type="text"
                className="h-44 w-44 bg-slate-100 text-black"
                placeholder="input"
              ></textarea>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

/**/
