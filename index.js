function theBeatlesPlay(musicians, instruments) {
    var myarr = [];
    for (var i = 0; i < musicians.length; i++) {
        myarr.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return myarr;
}

function johnLennonFacts(facts) {
    const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
    var counter = 0;
    while (counter < array.length) {
        facts[counter] += "!!!";
        counter++;
    }
    return facts;
}
