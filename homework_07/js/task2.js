var start = confirm("Do you want to play a game?");
var step = 6;
number = Math.floor(Math.random() * step);
var prize = 0;
var max_prize = 10;
var normal_prize = 5;
var min_prize = 2;
var count = 0;
var guess = 0;
var status = true;
if (start) {
    while (status) {
        guess = prompt('Enter a number from 0 to ' + step + '\n' + 'Attempts left: ' + (3 - count) + '\n' + 'Total prize: ' + prize + '$' + '\n' + 'Possible prize on current attempt: ' + (count < 1 ? max_prize : (count < 2) ? normal_prize : min_prize) + '$' + '\n' + 'Enter guessed number: ');
        count++;
        if (guess == number && count == 1) {
            prize += max_prize;
            console.log('Its correct! Your prize is: ' + prize + '$');
            let t1 = confirm('Do you want to continue?');
            if (t1) {
                step = step * 2;
                number = Math.floor(Math.random() * step);
                count = 0;
                max_prize = max_prize * 3;
                normal_prize = normal_prize * 3;
                min_prize = min_prize * 3;
                continue;
            }
            else {
                console.log("Final prize is: " + prize + '$');
                break;
            }
        }
        else if (guess == number && count == 2) {
            prize += normal_prize;
            console.log('Its correct! Your prize is: ' + prize + '$');
            let t1 = confirm('Do you want to continue?');
            if (t1) {
                step = step * 2;
                number = Math.floor(Math.random() * step);
                count = 0;
                max_prize = max_prize * 3;
                normal_prize = normal_prize * 3;
                min_prize = min_prize * 3;
                continue;
            }
            else {
                console.log("Final prize is: " + prize + '$');
                break;
            }
        }
        else if (guess == number && count == 3) {
            prize += min_prize;
            console.log('Its correct! Your prize is: ' + prize + '$');
            let t1 = confirm('Do you want to continue?');
            if (t1) {
                step = step * 2;
                number = Math.floor(Math.random() * 11);
                count = 0;
                max_prize = max_prize * 3;
                normal_prize = normal_prize * 3;
                min_prize = min_prize * 3;
                continue;
            }
            else {
                console.log("Final prize is: " + prize + '$');
                break;
            }
        }
        else if (guess != number && count == 3) {
            console.log('Thanks for playing! Your prize is: ' + prize + '$');
            let t1 = confirm(' Do you want to play again?');
            if (t1) {
                count = 0;
                prize = 0;
                step = 6;
                max_prize = 10;
                normal_prize = 5;
                min_prize = 3;
                number = Math.floor(Math.random() * step);
                continue;
            }
            else {
                console.log("Final prize is: " + prize + '$');
                break;
            }
        }
    }
}
else {
    console.log("You did not become a millionaire");
}