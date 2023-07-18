let a = ["Kev", "thames", "win", "win+2"];
let b = ["Schaab", "Namdev", "Jorn"];
let c = ["Sghett", "Sghett+1", "Kid"];
let d = ["Roy", "Pip", "Mon", "Sun", "Male", "Benson", "Pasu"];
let e = ["Nut", "Ruj", "Boom", "Brux"];
let f = ["Jah", "Jah+1"];
let g = ["Boom+2", "Maek"];
let noTeam = ["Azar", "Tee", "Aj"];

const allTeam = [a, b, c, e, f, g];
const team = [[], [], []];
let noPerTeam = 2;

let shuffled = allTeam;

for (let i = shuffled.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
}
//console.log(shuffled)

for (let i = 0; i < team.length; i++) {
  const noToFill = noPerTeam - team[i].length;
  for (let j = 0; j < noToFill; j++) {
    team[i].push(shuffled[0]);
    shuffled.shift();
  }

  //console.log(`team:${i + 1}`, team[i]);
  for (let i = 0; i < team[i].length; i++) {
    for (let j = 0; j < team[j].length; j++) {
      team[j].push(noTeam[0]);

      noTeam.shift();
      //console.log(j, team[j])
    }
  }
  console.log(`team:${i + 1}`, team[i]);
}
