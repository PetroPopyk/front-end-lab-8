//Find type and square of triangle
var side_1 = parseFloat(prompt("Enter value of first side of triangle: "));
var side_2 = parseFloat(prompt("Enter value of first second of triangle: "));
var side_3 = parseFloat(prompt("Enter value of first third of triangle: "));
var triangle_type = '';
var half_p = (side_1 + side_2 + side_3) / 2;
var triangle_square = (Math.sqrt(half_p * (half_p - side_1) * (half_p - side_2) * (half_p - side_3))).toFixed(2);
if (side_1 < 0 || side_2 < 0 || side_3 < 0) {
    console.log('incorect input');
}
else if (side_1 + side_2 <= side_3 || side_1 + side_3 <= side_2 || side_2 + side_3 <= side_1) {
    console.log('this triangle can not exist');
}
else if (side_1 == side_2 && side_2 == side_3) {
    triangle_type = 'Equilateral';
    console.log('Type of triangle is ' + triangle_type + ' and square is ' + triangle_square);
}
else if (side_1 == side_2 || side_1 == side_3 || side_2 == side_3) {
    triangle_type = 'Isosceles';
    console.log('Type of triangle is ' + triangle_type + ' and square is ' + triangle_square);
}
else if (Math.pow(side_1, 2) == Math.pow(side_2, 2) + Math.pow(side_3, 2)) {
    triangle_type = 'Right triangle';
    console.log('Type of triangle is ' + triangle_type + ' and square is ' + triangle_square);
}
else {
    triangle_type = 'Scalene';
    console.log('Type of triangle is ' + triangle_type + ' and square is ' + triangle_square);
}