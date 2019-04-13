class Wallet {
    constructor(money) {
        let _money = money;
        this.getMoney = () => {
            return _money;
        };
        this.takeBid = (bid) => {
            _money -= bid;
        }
        this.gameResult = (bid, win) => {
            if (win === true) _money = _money + (bid * 3);
        }

    }
}