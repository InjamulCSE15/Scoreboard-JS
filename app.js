import ScoreboardVw from "./scoreboard/ScoreboardVw.js";

let teamOneScore = 0;
let teamTwoScore = 0;

const root = document.querySelector('#app');

const view = new ScoreboardVw(root, "Red Team", "Blue Team", (team, direction) => {
    //Update the score:
    const difference = direction === "minus" ? -1 : 1;
    if (team === "one") {
        teamOneScore = Math.max(teamOneScore + difference, 0);
    }else{
        teamTwoScore = Math.max(teamTwoScore + difference, 0);
    }
    view.updateScore(teamOneScore, teamTwoScore);
});
