class GameStatistic {
    constructor() {
        this.games = 0;
        this.win = 0;
        this.lose = 0;
    }
    addStatistic(win) {
        this.games++;
        if (win === true) this.win++
        else this.lose++;
    }
}