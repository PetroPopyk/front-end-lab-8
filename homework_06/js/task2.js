//Convector of currencies
amount_of_EURO = parseFloat(prompt('Enter amount of EURO: ')).toFixed(2);
amount_of_USD = parseFloat(prompt('Enter amount of USD: ')).toFixed(2);
curr_USD = 27.4609;
curr_EURO = 33.8565;
euro_to_uah = (amount_of_EURO * curr_EURO).toFixed(2);
usd_to_uah = (amount_of_USD * curr_USD).toFixed(2);
euro_to_usd = (curr_EURO / curr_USD).toFixed(2);
if (amount_of_EURO <= 0 || amount_of_USD <= 0 || isNaN(amount_of_EURO) == true || isNaN(amount_of_USD) == true) {
    console.log('incorect input');
}
else {
    console.log('For data ' + amount_of_EURO + ' euro and ' + amount_of_USD + ' usd');
    console.log(amount_of_EURO + ' euros are equal to ' + euro_to_uah + ' UAH, ' + amount_of_USD + ' dollars are equal ' + usd_to_uah + ' UAH, one euro is equal ' + euro_to_usd + ' dollars.');
}