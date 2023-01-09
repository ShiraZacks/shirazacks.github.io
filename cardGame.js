class card {
    construtor() {
        this.image = "image";
        this.value = 1;
    }
    getImage() {
        return this.image;
    }
    setImage(image) {
        this.image = image;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
const setOfDiamonds = [];
const setOfClubs = [];
const setOfSpades = [];
const setOfHearts = [];
const fullDeck = [];

function getClubs() {
    const aClubs = new card();
    aClubs.setImage("aClubs.png");
    aClubs.setValue(11);
    setOfClubs.push(aClubs);
    const kClubs = new card();
    kClubs.setImage("kClubs.jpeg");
    kClubs.setValue(10);
    setOfClubs.push(kClubs);
    const qClubs = new card();
    qClubs.setImage("qClubs.jpeg");
    qClubs.setValue(10);
    setOfClubs.push(qClubs);
    const jClubs = new card();
    jClubs.setImage("jClubs.png");
    jClubs.setValue(10)
    setOfClubs.push(jClubs);
    const tenClubs = new card();
    tenClubs.setImage("10Clubs.jpeg");
    tenClubs.setValue(10);
    setOfClubs.push(tenClubs);
    const nineClubs = new card();
    nineClubs.setImage("9Clubs.jpeg");
    nineClubs.setValue(9);
    setOfClubs.push(nineClubs);
    const eightClubs = new card();
    eightClubs.setImage("8Clubs.jpeg");
    eightClubs.setValue(8);
    setOfClubs.push(eightClubs);
    const sevenClubs = new card();
    sevenClubs.setImage("7Clubs.jpeg");
    sevenClubs.setValue(7);
    setOfClubs.push(sevenClubs);
    const sixClubs = new card();
    sixClubs.setImage("6Clubs.jpeg");
    sixClubs.setValue(6);
    setOfClubs.push(sixClubs);
    const fiveClubs = new card();
    fiveClubs.setImage("5Clubs.jpeg");
    fiveClubs.setValue(5);
    setOfClubs.push(fiveClubs);
    const fourClubs = new card();
    fourClubs.setImage("4Clubs.jpeg");
    fourClubs.setValue(4);
    setOfClubs.push(fourClubs);
    const threeClubs = new card();
    threeClubs.setImage("3Clubs.jpeg");
    threeClubs.setValue(3);
    setOfClubs.push(threeClubs);
    const twoClubs = new card();
    twoClubs.setImage("2Clubs.jpeg");
    twoClubs.setValue(2);
    setOfClubs.push(twoClubs);
}
function getHearts() {
    const aHearts = new card();
    aHearts.setImage("aHearts.png");
    aHearts.setValue(11);
    setOfHearts.push(aHearts);
    const kHearts = new card();
    kHearts.setImage("kHearts.jpeg");
    kHearts.setValue(10);
    setOfHearts.push(kHearts);
    const qHearts = new card();
    qHearts.setImage("qHearts.jpeg");
    qHearts.setValue(10);
    setOfHearts.push(qHearts);
    const jHearts = new card();
    jHearts.setImage("jHearts.jpeg");
    jHearts.setValue(10);
    setOfHearts.push(jHearts);
    const tenHearts = new card();
    tenHearts.setImage("10Hearts.jpeg");
    tenHearts.setValue(10);
    setOfHearts.push(tenHearts);
    const nineHearts = new card();
    nineHearts.setImage("9Hearts.jpeg");
    nineHearts.setValue(9);
    setOfHearts.push(nineHearts);
    const eightHearts = new card();
    eightHearts.setImage("8Hearts.jpeg");
    eightHearts.setValue(8);
    setOfHearts.push(eightHearts);
    const sevenHearts = new card();
    sevenHearts.setImage("7Hearts.jpeg");
    sevenHearts.setValue(7);
    setOfHearts.push(sevenHearts);
    const sixHearts = new card();
    sixHearts.setImage("6Hearts.jpeg");
    sixHearts.setValue(6);
    setOfHearts.push(sixHearts);
    const fiveHearts = new card();
    fiveHearts.setImage("5Hearts.jpeg");
    fiveHearts.setValue(5);
    setOfHearts.push(fiveHearts);
    const fourHearts = new card();
    fourHearts.setImage("4Hearts.jpeg");
    fourHearts.setValue(4);
    setOfHearts.push(fourHearts);
    const threeHearts = new card();
    threeHearts.setImage("3Hearts.jpeg");
    threeHearts.setValue(3);
    setOfHearts.push(threeHearts);
    const twoHearts = new card("2Hearts.jpeg", 2);
    twoHearts.setImage("2Hearts.jpeg");
    twoHearts.setValue(2);
    setOfHearts.push(twoHearts);
}
function getSpades() {
    const aSpades = new card();
    aSpades.setImage("aSpades.png");
    aSpades.setValue(11);
    setOfSpades.push(aSpades);
    const kSpades = new card();
    kSpades.setImage("kSpades.png");
    kSpades.setValue(10);
    setOfSpades.push(kSpades);
    const qSpades = new card();
    qSpades.setImage("qSpades.jpeg");
    qSpades.setValue(10);
    setOfSpades.push(qSpades);
    const jSpades = new card();
    jSpades.setImage("jSpades.jpeg");
    jSpades.setValue(10);
    setOfSpades.push(jSpades);
    const tenSpades = new card();
    tenSpades.setImage("10Spades.jpeg");
    tenSpades.setValue(10);
    setOfSpades.push(tenSpades);
    const nineSpades = new card();
    nineSpades.setImage("9Spades.jpeg");
    nineSpades.setValue(9);
    setOfSpades.push(nineSpades);
    const eightSpades = new card();
    eightSpades.setImage("8Spades.jpeg");
    eightSpades.setValue(8);
    setOfSpades.push(eightSpades);
    const sevenSpades = new card();
    sevenSpades.setImage("7Spades.jpeg");
    sevenSpades.setValue(7);
    setOfSpades.push(sevenSpades);
    const sixSpades = new card();
    sixSpades.setImage("6Spades.jpeg");
    sixSpades.setValue(6);
    setOfSpades.push(sixSpades);
    const fiveSpades = new card();
    fiveSpades.setImage("5Spades.jpeg");
    fiveSpades.setValue(5);
    setOfSpades.push(fiveSpades);
    const fourSpades = new card();
    fourSpades.setImage("4Spades.jpeg");
    fourSpades.setValue(4);
    setOfSpades.push(fourSpades);
    const threeSpades = new card();
    threeSpades.setImage("3Spades.jpeg");
    threeSpades.setValue(3);
    setOfSpades.push(threeSpades);
    const twoSpades = new card();
    twoSpades.setImage("2Spades.jpeg");
    twoSpades.setValue(2);
    setOfSpades.push(twoSpades);
}
function getDiamonds() {
    const aDiamonds = new card();
    aDiamonds.setImage("aDiamonds.jpeg");
    aDiamonds.setValue(11);
    setOfDiamonds.push(aDiamonds);
    const kDiamonds = new card();
    kDiamonds.setImage("kDiamonds.jpeg");
    kDiamonds.setValue(10);
    setOfDiamonds.push(kDiamonds);
    const qDiamonds = new card();
    qDiamonds.setImage("qDiamonds.jpeg");
    qDiamonds.setValue(10);
    setOfDiamonds.push(qDiamonds);
    const jDiamonds = new card();
    jDiamonds.setImage("jDiamonds.jpeg");
    jDiamonds.setValue(10);
    setOfDiamonds.push(jDiamonds);
    const tenDiamonds = new card();
    tenDiamonds.setImage("10Diamonds.jpeg");
    tenDiamonds.setValue(10);
    setOfDiamonds.push(tenDiamonds);
    const nineDiamonds = new card();
    nineDiamonds.setImage("9Diamonds.jpeg");
    nineDiamonds.setValue(9);
    setOfDiamonds.push(nineDiamonds);
    const eightDiamonds = new card();
    eightDiamonds.setImage("8Diamonds.jpeg");
    eightDiamonds.setValue(8);
    setOfDiamonds.push(eightDiamonds);
    const sevenDiamonds = new card();
    sevenDiamonds.setImage("7Diamonds.jpeg");
    sevenDiamonds.setValue(7);
    setOfDiamonds.push(sevenDiamonds);
    const sixDiamonds = new card();
    sixDiamonds.setImage("6Diamonds.jpeg");
    sixDiamonds.setValue(6);
    setOfDiamonds.push(sixDiamonds);
    const fiveDiamonds = new card();
    fiveDiamonds.setImage("5Diamonds.jpeg");
    fiveDiamonds.setValue(5);
    setOfDiamonds.push(fiveDiamonds);
    const fourDiamonds = new card();
    fourDiamonds.setImage("4Diamonds.jpeg");
    fourDiamonds.setValue(4);
    setOfDiamonds.push(fourDiamonds);
    const threeDiamonds = new card();
    threeDiamonds.setImage("3Diamonds.jpeg");
    threeDiamonds.setValue(3);
    setOfDiamonds.push(threeDiamonds);
    const twoDiamonds = new card();
    twoDiamonds.setImage("2Diamonds.jpeg");
    twoDiamonds.setValue(2);
    setOfDiamonds.push(twoDiamonds);
}

function fillTheDeck() {
    getDiamonds();
    getClubs();
    getHearts();
    getSpades();
    for (let i = 0; i < setOfDiamonds.length; i++) {
        fullDeck.push(setOfClubs[i]);
        fullDeck.push(setOfDiamonds[i]);
        fullDeck.push(setOfHearts[i]);
        fullDeck.push(setOfSpades[i]);
    }
}
function getRandomCard() {
    const random = Math.ceil(Math.random() * 52);
    return fullDeck[random];
}
function getCards() {
    let card1 = document.getElementById('card1');
    let card2 = document.getElementById('card2');
    fillTheDeck();
    const randomCard1 = getRandomCard();
    const randomCard2 = getRandomCard();

    card1.src = randomCard1.getImage();
    card2.src = randomCard2.getImage();

    let winner = document.getElementById("justForJS")

    switch (randomCard1.value) {
        case randomCard2.value:
            winner.innerHTML = "Tie game!!"
            break;

        case 10:
            if (randomCard2.value > 10) {
                winner.innerHTML = "Team B Wins!"
            }
            else {
                winner.innerHTML = "Team A wins!"
            }
            break;

        case 9:
            if (randomCard2.value > 9) {
                winner.innerHTML = "Team B Wins!"
            }
            else {
                winner.innerHTML = "Team A wins!"
            }
            break;


        case 8:
            if (randomCard2.value > 8) {
                winner.innerHTML = "Team B Wins!"
            }
            else {
                winner.innerHTML = "Team A wins!"
            }
            break;

        case 7:
            if (randomCard2.value > 7) {
                winner.innerHTML = "Team B Wins!"
            }
            else {
                winner.innerHTML = "Team A wins!"
            }
            break;

        case 6:
            if (randomCard2.value > 6) {
                winner.innerHTML = "Team B Wins!"
            }
            else {
                winner.innerHTML = "Team A wins!"
            }
            break;

        case 5:
            if (randomCard2.value > 5) {
                winner.innerHTML = "Team B Wins!"
            }
            else {
                winner.innerHTML = "Team A wins!"
            }
            break;

        case 4:
            if (randomCard2.value > 4) {
                winner.innerHTML = "Team B Wins!"
            }
            else {
                winner.innerHTML = "Team A wins!"
            }
            break;

        case 3:
            if (randomCard2.value > 3) {
                winner.innerHTML = "Team B Wins!"
            }
            else {
                winner.innerHTML = "Team A wins!"
            }
            break;


        case 2:
            if (randomCard2.value > 2) {
                winner.innerHTML = "Team B Wins!"
            }
            else {
                winner.innerHTML = "Team A wins!"
            }
            break;

        case 1:
            if (randomCard2.value > 1) {
                winner.innerHTML = "Team B Wins!"
            }
            else {
                winner.innerHTML = "Team A wins!"
            }
            break;


        default: winner.innerHTML = "Team A wins!!"
            break;
    }

}
