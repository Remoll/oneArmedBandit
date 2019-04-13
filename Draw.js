class Draw {
    constructor() {
        let box = [];
        this.Random = (boxes) => {
            for (let i = 0; i < 3; i++) {
                box[i] = Math.floor((Math.random() * 3) + 1);
                if (box[i] === 1) boxes[i].style.backgroundColor = "red";
                else if (box[i] === 2) boxes[i].style.backgroundColor = "blue";
                else if (box[i] === 3) boxes[i].style.backgroundColor = "green";
            }
            if (((box[0] === box[1]) && (box[0] === box[2])) || ((box[0] !== box[1]) && (box[0] !== box[2]) && (box[1] !== box[2]))) return true;
            else return false;
        }
    }
}