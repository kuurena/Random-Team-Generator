function generateTeams(players, fixedTeams, teamNumber) {
  //add number of team
  let teams = [];
  for (let i = 0; i < teamNumber; i++) {
    teams.push([]);
  }

  //random the number of fixed team
  for (let i = fixedTeams.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fixedTeams[i], fixedTeams[j]] = [fixedTeams[j], fixedTeams[i]];
  }

  // Distribute fixed players into the 4 teams
  for (let i = 0; i < fixedTeams.length; i++) {
    for (let j = 0; j < fixedTeams[i].length; j++) {
      teams[i % teams.length].push(fixedTeams[i][j]);

      // Remove this fixed player from the players list
      let playerIndex = players.indexOf(fixedTeams[i][j]);
      if (playerIndex !== -1) {
        players.splice(playerIndex, 1);
      }
    }
  }

  //add the rest of player to team
  while (players.length > 0) {
    let randomIndex = Math.floor(Math.random() * players.length);

    // Find the team with the smallest size
    let smallestTeamIndex = 0;
    for (let i = 1; i < teams.length; i++) {
      if (teams[i].length < teams[smallestTeamIndex].length) {
        smallestTeamIndex = i;
      }
    }

    // Add player to the smallest team
    teams[smallestTeamIndex].push(players[randomIndex]);

    // Remove this player from the players list
    players.splice(randomIndex, 1);
  }

  return teams;
}

export default generateTeams;
