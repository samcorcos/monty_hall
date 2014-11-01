var games = 1000, noChange = 0, change = 0;

var randomDoor = function() {
    return Math.floor(Math.random() * 3) + 1;
}

for (i = 0; i < games; i++) {
    var winningDoor = randomDoor();
    var chosenDoor = randomDoor();
    if (winningDoor == chosenDoor) {    // If you pick the right door and dont change, you win.
        noChange += 1;
    }
    if (winningDoor != chosenDoor) {    // This is where it gets interesting! If you originally picked the wrong door, another wrong door would be opened, leaving your only remaining option: the correct door!
        change += 1;
    }
}

for (i = 0; i < games; i++) {

}


console.log(noChange + " wins out of 1000 games if you do not change doors.");
console.log(change + " wins out of 1000 games if you do change doors.");
