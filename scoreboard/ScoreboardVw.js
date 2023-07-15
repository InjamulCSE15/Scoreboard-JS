export default class ScoreboardVw {
  constructor(root, teamOne, teamTwo, onScoreChangeBtn) {
    this.root = root;
    this.root.innerHTML = `
    <div class="container">
        <div class="row scoreboard justify-content-center">
        <div class="col-6 col-sm-3">
            <div class="scoreboard-name text-danger red-team">${teamOne}</div>
            <div class="scoreboard-score display-5" data-for-team="one">0</div>            
                <div class="score-control text-center"  data-for-team="one">
                    <button class="btn px-lg-5 px-sm-3 btn-outline-danger">-</button>               
                    <button class="btn px-lg-5 px-sm-3 btn-outline-success">+</button>
                </div>
        </div>
        <div class="col-6 col-sm-3">
            <div class="scoreboard-name text-primary blue-team">${teamTwo}</div>
            <div class="scoreboard-score display-5" data-for-team="two">0</div>
            <div class="score-control text-center"  data-for-team="two">
                    <button class="btn px-lg-5 px-sm-3 btn-outline-danger">-</button>              
                    <button class="btn px-lg-5 px-sm-3 btn-outline-success">+</button>                
            </div>
        </div>
    </div>
    </div>
        `;
        this.root.querySelectorAll(".btn").forEach(scoreBtn => {
            scoreBtn.addEventListener("click", ()=> {
                const direction = scoreBtn.textContent === "-" ? "minus" : "plus";
                const team = scoreBtn.closest(".score-control").dataset.forTeam;
                onScoreChangeBtn(team, direction);
            });
        });
  }
  updateScore(teamOneScore, teamTwoScore) {
    this.root.querySelector(".scoreboard-score[data-for-team='one']").textContent = teamOneScore;
    this.root.querySelector(".scoreboard-score[data-for-team='two']").textContent = teamTwoScore;
  }
}