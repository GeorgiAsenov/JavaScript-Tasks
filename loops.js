// Task 7 from hw 2;

var n = 9;
var count;
var three = 3
var sum = (n * three);

for (; three <= sum; three++) {
    if (three == sum) {
        process.stdout.write(three + '.');
        break;
    }
    if (three % 3 == 0) {
        process.stdout.write(three + ', ');
    }
    count++;
}

// Task 8 from hw 2

var a = 2;
var b = a - 1;


for (var i = 1; i <= a; i++) {
    for (var x = 1; x <= a - 1; x++) {
        process.stdout.write(b + '');
    }
    console.log(b);
    b += 2;
}

// Task 9 from hw 2 

var a = 1;
var b = 22;

for (; a <= b; a++) {
    var multyply = a * a;
    if ((multyply) % 3 == 0) {
        process.stdout.write("skip " + a + ', ');
    }
    process.stdout.write(multyply + ', ');
}

// Task 10 from hw 2 Prime number;

var a = 4;
var b = a + 1;
var c = a - 1;

if ((a % a == 0 && a % 1 == 0) && (b % 2 == 0 && c % 2 == 0) || a == 2) {
    console.log('It\'s prime');
} else {
    console.log('it\'s NOT prime');
}

// Task 11 from hw 2;

var h = 5;
var star = '*';
var singleSpace = ' ';

for (var row = 1; row <= h; row++) {
    for (var spaces = row; spaces <= h - 1; spaces++) {
        process.stdout.write(singleSpace + '');

    }
    process.stdout.write(star + '');
    console.log();

}

// Task empty triangle 90 degreece (a);

var h = 6;
var star = '*';
console.log(star)
for (var row = 2; row <= h - 1; row++) {

    process.stdout.write(star + '')

    for (var spaces = 1; spaces <= row - 2; spaces++) {
        process.stdout.write(' ');
    }
    process.stdout.write(star + '')
    console.log();

}

for (var sta = 1; sta <= h; sta++) {
    process.stdout.write(star + '')
}

// Task empty triangle 90 degreece (b);

var star = '*';
var space = ' ';
var h = 6;

for (var row = 1; row <= h - 1; row++) {
    for (var col = 1; col <= row - 1; col++) {
        if (col == 1) {
            process.stdout.write(star + '');
        } else {
            process.stdout.write(space + '');
        }
    }
    console.log(star);
}
for (var lastRow = 1; lastRow <= h; lastRow++) {
    process.stdout.write(star + '');
}


// Task empty triangle


var star = '*';
var space = ' ';
var h = 8;
var one = 1;

for (var row = 1; row <= h - 1; row++) {
    for (var col = row; col <= h - 1; col++) {
        process.stdout.write(' ');
    }

    for (var leftSide = one; leftSide <= (row * 2) - 2; leftSide++) {
        if (leftSide == one) {
            process.stdout.write(star + '');
        } else {
            process.stdout.write(space + '');
        }

    }
    console.log(star);
}
for (var lastRow = 1; lastRow <= (h * 2) - 1; lastRow++) {
    process.stdout.write(star + '');
}

// Task 12 form hw 2;

var a = 100;
var b = 999;
for (; a <= b; a++) {
    var first = a % 10;
    var second = Math.floor((a % 100) / 10);
    var third = Math.floor(a / 100);

    if (first != second && first != third && second != third) {
        console.log(a);
    }
}

// Task 13 from hw 2;

var number = 26;

for (var i = 100; i <= 999; i++) {

    var first = i % 10;
    var second = Math.floor((i % 100) / 10);
    var third = Math.floor(i / 100);

    if ((first + second + third) == number) {
        console.log(i);
    }
}

// Task 14 from hw 2 ;

var number = Math.round(Math.random(10) * 200);

console.log(number)
console.log();
for (; number > 10; number--) {
    if (number % 7 == 0) {
        console.log(number);
    }

}

// Task 15 from hw 2;

var number = Math.round(Math.random() * 49 + 1);
console.log('this is the number: ' + number);
console.log()
var a = 0;
for (var i = 1; i <= number; i++) {

    a += i;

}
console.log('this is the sum: ' + a)

// Task 16 from hw 2;

var a = Math.round(Math.random(10) * 5555);
var b = Math.round(Math.random(10) * 5555);

console.log('a: ' + a);
console.log('b: ' + b);

if (a > b) {
    for (; a >= b; a--) {
        if (a % 50 === 0) {
            console.log(a);
        }
    }
} else {
    for (; b >= a; b--) {
        if (b % 50 === 0) {
            console.log(b);
        }
    }
}

// Task 17 from hw 2:

var wall = '*';
var symbol = '7';
var h = 10;

for (var rows = 1; rows <= h; rows++) {
    for (var cols = 1; cols <= h; cols++) {

        if ((rows > 1 && rows < h) && (cols > 1 && cols < h)) {
            process.stdout.write(symbol + '');
        } else {
            process.stdout.write(wall + '');
        }
    }
    console.log();
}

// Task 18 from hw 2::

var first = 4;
var second = 4;

for (var num = 1; num <= first; num++) {
    for (var row = 1; row <= second; row++) {
        console.log(num + ' * ' + row + ' = ' + num * row);
    }
}


// Task 19 from hw 2:

var number = Math.round(Math.random(10) * 98 + 1);
console.log(number + ' this is the number');
console.log();

for (var copyOfNumber = number; copyOfNumber >= 1; copyOfNumber--) {

    if (number % 2 == 0) {
        number = number * 0.5;
        if (number == 1) {
            console.log(number + ' end');
            break;
        }
        console.log(number);

    } else {
        number = (number * 3) + 1;
        if (number == 1) {
            console.log(number + ' end');
            break;
        }
        console.log(number);

    }
    copyOfNumber = number;
}

// Task 20 from hw 2;

for (var rows = 1; rows <= 10; rows++) {

    for (var cols = rows; cols <= 9; cols++) {
        process.stdout.write(cols + ' ');
    }

    for (var cols = 0; cols < rows - 1; cols++) {
        process.stdout.write(cols + ' ');
    }
    console.log();
}

// Task 21:

// first way to do it --->

var number = Math.round(Math.random(1) * 52);
console.log('This is the generated number - ' + number);

for (; number <= 52; number++) {
    var card = (Math.ceil(number / 4) + 1);

    switch (card) {
        case 11:
            card = "J"
            break;
        case 12:
            card = "Q"
            break;
        case 13:
            card = "K"
            break;
        case 14:
            card = "A"
            break;

        default:
            break;
    }

    var boq = '';
    switch (number % 4) {
        case 0:
            boq = "pika"
            break;
        case 1:
            boq = "spatiq"
            break;
        case 2:
            boq = "karo"
            break;
        case 3:
            boq = "kupa"
            break;
    }

    console.log(card + ' ' + boq);
}


// badass way to do it -->

var number = Math.round(Math.random(1) * 52);
console.log('This is the generated number - ' + number);

for (; number <= 52; number++) {
    var card = (Math.ceil(number / 4) + 1);

    var cards = ['J', 'Q', 'K', 'A'];
    if (card > 10) {
        card = cards[card - 11];
    }

    var boq = '';
    var boi = ['pika', 'spatiq', 'karo', 'kupa'];
    boq = boi[boq % 4];

    console.log(card + ' ' + boq);
}


// Task 22 from hw2:

var number = Math.round(Math.random(1) * 999);
console.log('we\'re starting from this number: ' + number);
console.log()
var count = 1;
var index = 0;
for (; number <= 999; number++) {

    if (number % 2 == 0 || number % 3 == 0 || number % 5 == 0) {
        index++;
        process.stdout.write(index + ':' + number + ' ');
        if (count == 10) {
            break;
        }
        count++;
    }
}

// Task 23 from hw2:

for (var row = 1; row <= 9; row++) {
    process.stdout.write('row ' + row + ': ');
    for (var secNum = 1; secNum <= 9; secNum++) {

        if (secNum >= row) {
            process.stdout.write(row + '*' + secNum + '; ');
        }
    }
    console.log();
}


// Task 24 from hw2:


var number = 12121;
var numberValue = number;
var secNum = 0;

while (number !== 0) {
    var value = number % 10;
    number = Math.floor(number / 10);
    secNum *= 10;
    secNum += value;
}

if (numberValue == secNum) {
    console.log('The number it\'s Palindrom!')
} else {
    console.log('The number ISN\'T Palindrom!!!');
}

// Task 25 from hw 2;

var number = 6;
var multyply = 1;
for (var i = 1; i <= number; i++) {
    multyply *= i;
}
console.log(multyply);