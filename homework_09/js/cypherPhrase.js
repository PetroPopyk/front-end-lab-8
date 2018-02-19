function cypherPhrase(phrase, obj) {
    phrase = phrase.split('');
    getTransformedArray(function (item) {
        getTransformedArray(function (element) {
            if (item == element) {
                item = obj[element];
            }
        }, Object.keys(obj));
    }, phrase).join('');
};