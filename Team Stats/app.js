const team = {
  _players: [
    {firstName: 'Michal', lastName: 'Zawierucha', age: 42},
    {firstName: 'Przemyslaw', lastName: 'Pietkun', age: 42},
    {firstName: 'Rafal', lastName: 'Pietkun', age: 47}
  ],
  _games: [
    {opponent: 'Koszarawa Babia Mountain', teamPoints: 45, opponentPoints: 25},
    {opponent: 'TS Podbeskidzie', teamPoints: 42, opponentPoints: 12},
    {opponent: 'Legia Warszawa', teamPoints: 35, opponentPoints: 17}
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);
