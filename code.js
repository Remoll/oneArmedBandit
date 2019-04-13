const bidField = document.querySelector(".spin input");
const rollBtn = document.querySelector(".spin button");
const money = document.querySelector(".state .credits");
const thisGame = document.querySelector(".thisGame");
const gamesNumber = document.querySelector(".results .games");
const winsNumber = document.querySelector(".results .wins");
const losesNumber = document.querySelector(".results .loses");
const boxes = [...document.querySelectorAll(".boxes div")];
const wallet = new Wallet(100);
const gameStatistic = new GameStatistic();
money.textContent = wallet.getMoney();
gamesNumber.textContent = gameStatistic.games;
winsNumber.textContent = gameStatistic.win;
losesNumber.textContent = gameStatistic.lose;
rollBtn.addEventListener("click", (event) => {
    event.preventDefault()
    if (bidField.value > wallet.getMoney()) alert("Masz za mało pieniędzy");
    else if (bidField.value === ("")) alert("Nie podałeś stawki");
    else if (bidField.value === ("0")) alert("Podaj innę stawkę");
    else {
        console.log(`Postawiłeś ${bidField.value}$`)
        const draw = new Draw();
        wallet.takeBid(bidField.value);
        const win = draw.Random(boxes);
        wallet.gameResult(bidField.value, win);
        gameStatistic.addStatistic(win)
        money.textContent = wallet.getMoney();
        gamesNumber.textContent = gameStatistic.games;
        winsNumber.textContent = gameStatistic.win;
        losesNumber.textContent = gameStatistic.lose;
        thisGame.textContent = (`Postawiłeś ${bidField.value}$, ${win?`Wygrałeś `:`Przegrałeś `}${win?bidField.value*3:bidField.value}$`)
        bidField.value = ("");
    }
})