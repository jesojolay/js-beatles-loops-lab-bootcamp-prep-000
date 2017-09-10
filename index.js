function theBeatlesPlay(musicians, instruments){
    var myarr = [];
    for (var i = 0; i < musicians.length; i++) {
        myarr.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return myarr;
}
