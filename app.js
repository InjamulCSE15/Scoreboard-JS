import ScoreboardVw from "./scoreboard/ScoreboardVw.js";

let redTeamScore = 0;
let blueTeamScore = 0;

const root = document.querySelector('#app');

const view = new ScoreboardVw(root, "Red Team", "Blue Team", (team, direction) => {
    //Update the score:
    console.log(team);
    console.log(direction);

});