function theBeatlesPlay(musicians, instruments) {
    var myarr = [];
    for (var i = 0; i < musicians.length; i++) {
        myarr.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return myarr;
}
const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {

    var counter = 0;
    while (counter < array.length) {
        facts[counter] += "!!!";
        counter++;
    }
    console.log(facts);
}(facts)
