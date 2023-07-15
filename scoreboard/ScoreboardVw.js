export default class ScoreboardVw {
  constructor(root, teamOne, teamTwo, onScoreChangeBtn) {
    this.root = root;
    this.root.innerHTML = `
        <div class="row scoreboard ">
        <div class="col">
            <div class="scoreboard-name text-danger red-team">${teamOne}</div>
            <div class="scoreboard-score display-5" data-for-team="one">0</div>
            
                <div class="score-control"  data-for-team="one">
                    <button class="btn btn-block btn-outline-danger"><i class="fa-solid fa-minus"></i></button>
               
                    <button class="btn btn-block btn-outline-success"><i class="fa-solid fa-plus"></i></button>
                </div>
     

        </div>
        <div class="col">
            <div class="scoreboard-name text-primary blue-team">${teamTwo}</div>
            <div class="scoreboard-score display-5" data-for-team="two">0</div>
            <div class="score-control"  data-for-team="two">
                    <button class="btn btn-block btn-outline-danger"><i class="fa-solid fa-minus"></i></button>
              
                    <button class="btn btn-block btn-outline-success"><i class="fa-solid fa-plus"></i></button>
                
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
}
