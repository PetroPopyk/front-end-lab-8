function decypherPhrase(phrase, obj) {
    phrase = phrase.split('');
    getTransformedArray(function (item) {
        getTransformedArray(function (element) {
            if (item == element) {
                item = obj[element];
            }
        }, Object.values(obj));
    }, phrase).join('');
};