// Next Task

var name = "CekoSirenyeto";

var nukva = name.toLowerCase().charAt(4);

for (var index = 0; index < name.length; index++) {
    var ciganin = name.toLowerCase().charAt(index);
    console.log(ciganin)
}


// Next Task


var howMany = 'The Force Awakens';
count = 0;
for (var index = 0; index < howMany.length; index++) {
    var lower = howMany.toLowerCase();
    if (lower.charAt(index) == "a") {
        count++
    }

}
console.log(count);


// Next Task


var string = 'november';
var newString = '';

for (var index = 0; index < string.length; index++) {
    if (string.charAt(index) !== 'm') {
        newString += string.charAt(index);
    } else {
        newString += 'n';
    }
}
console.log(newString);


// Next Task


var cifInuk = '123nnd 442asd';
var samoCif = '';
for (var index = 0; index < cifInuk.length; index++) {

    var char = cifInuk.charAt(index);

    if (!isNaN(Number(char))) {
        samoCif += char;
    }
}
console.log(samoCif);


// functions and recursion: 


function peinulka(omnre) {
    console.log('anv ' + omnre);
    console.log('haha ' + omnre);
}

peinulka('gyza');

// Next Task

function nulka() {
    var p = Math.random();
    if (p < 0.33) {
        return 'nanani';

    }
    if (p > 0.66) {
        return 'krastavici'
    }
    return 'kokali';
}

var podai = nulka();
console.log(podai)


// Next Task

function anra(a, n) {
    return ((a == 0) || (n == 0)) ? 0 + ', na nula ne se deli ma!' : a / n;

}

var opsa = anra(4, 122320);
console.log(opsa);


// Next Taskr


function daiMiPlod() {

    var plArr = ['a', 'n', 'n', 'd', 'f', 'h', 's'];

    var op = Math.floor(Math.random() * plArr.length);

    return plArr[op];

}

for (var index = 1; index <= 20; index++) {
    var ha = daiMiPlod();
    console.log(ha)
}


// Next Task


function generate(a) {
    if (a > 0) {
        var op = new Array(a);

        for (var index = 0; index < a; index++) {
            op[index] = Math.round(Math.random() * 4);
        }
        return op;
    } else {
        console.log('ne');
        return [];
    }
}

var opsa = generate(-1);
console.log(opsa);


// Next Task

function Circle(r) {
    if (r < 1) {
        return 0;
    }

    var formula = Math.PI * r * 2;
    return formula;
}
var opsa = Circle(234);
console.log(opsa)


// Next Task

function counter(letter) {
    if (!isNaN(letter)) {
        return ' ne stava';
    }
    letter.split(' ');

    var count = 0;
    for (var index = 1; index <= letter.length; index++) {
        if ((letter[index] == 'a') || (letter[index] === 'A')) {
            count++;
        }
    }
    return count;
}

var opsa = counter('hahaaaaAaaAAAAA');
console.log(opsa);

// Next Task


function f() { // Wrong way to do it!!! -  Stack Overflow!;

    console.log('hi');
    f();
}
f();

// Next Task

function sayHi(howManyTimes) {
    if (howManyTimes > 10) {
        return;
    }
    console.log('HI');

    sayHi(howManyTimes + 1);
}

var opsa = sayHi(2);

// Next Task

function goodnye(chao) {
    if ((isNaN(chao)) || (chao <= 0)) {
        return;
    }
    console.log('Ama dovijdane');

    goodnye(chao - 1);
}
goodnye(5);

// Next Task

function aHundred(sto) {
    if (isNaN(sto) || (sto > 100)) {
        return;
    }
    console.log(sto);
    aHundred(sto + 1);
}
aHundred(1);

// Next Task

function sus(a, n) {
    if (a > n) {
        return;
    }
    console.log(a);
    sus(a + 1, n);
}

sus(1, 30);

// Next Task

function print(arr, index) {
    if (index >= arr.length) {
        return;
    }

    console.log(arr[index]);
    print(arr, (index + 1));
}

var mas = [1, 2, 3, 4, 5];
print(mas, 0);

// Next Task

function strings(a, n) {

    a = a.split(' ');
    n = n.split(' ');

    var op = '';

    for (var x = 0; x < a.length; x++) {
        for (var y = 0; y < n.length; y++) {

            if (a[x] == n[y]) {
                op += a[x] + ' ';
            }

        }
    }
    console.log(op);
}

strings('Hello my name is Kylo', 'Hello, my name is Renn');



//recursion from 1 to n

function sum(n) {
    if (n == 0) {
        return 0;
    }
    return n + sum(n - 1);
}
console.log(sum(4));


//recursion 1 то n

function proizvedenie(n) {
    if (n <= 0) {
        return 1;
    }
    if (n % 3 == 0) {
        return n * proizvedenie(n - 3);
    }
    return proizvedenie(n - 1);
}
console.log(proizvedenie(10));

// функция да намерим сбора на масив и да разделим на броя елементи:

function devidedArr(array) {
    var count = 0;

    for (var index = 0; index < array.length; index++) {
        count += array[index];
    }
    var abs = Math.floor(count / index);
    console.log(abs);
}
devidedArr([4, 6, 1, 5]);

// form ASCII numbers in string: 

function Zdrasti(array) {
    var str = '';
    for (var index = 0; index < array.length; index++) {
        str += String.fromCharCode(array[index]);
    }
    console.log(str);
}

Zdrasti([66, 65, 66, 65]);

// Recursion next task

function calc(n) {
    if (n <= 0) {
        return 0;
    }
    return n + calc(n - 1);

}

console.log(calc(15));

// Recursion next task

function printArr(arr, index) {

    if (index >= arr.length) {
        return;
    }

    console.log(arr[index]);

    printArr(arr, index + 1);

}

var mas = [1, 2, 3, 4];
printArr(mas, 0);

// Recursion next task

function sumMas(arr, index) {
    if (index >= arr.length) {
        return 0;
    }

    return arr[index] + sumMas(arr, index + 1);

}

console.log(sumMas([1, 2, 3, 4], 0));


// Recursion next task.

function daiMax(arr, index, max) {
    if (index >= arr.length) {
        return max;
    }

    if (arr[index] > max) {
        max = arr[index];
    }
    return daiMax(arr, index + 1, max);
}

console.log(daiMax([1, 2, 3, 2, 4, 1566, 5, 2, 8], 0, 1));


// Recursion next task


var maze = [
    [' ', '*', '*', '*', ' ', ' '],
    [' ', '*', ' ', '*', ' ', ' '],
    [' ', '*', ' ', '*', ' ', ' '],
    [' ', '*', ' ', '*', ' ', ' '],
    [' ', '*', ' ', '*', ' ', ' '],
    [' ', '*', '*', '*', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
]

function boom(maze, row, col) {

    if ((row >= 0) && (row < maze.length) &&
        (col >= 0) && (col < maze[row].length)) {
        if (maze[row][col] === ' ') {
            maze[row][col] = '#';

            boom(maze, row - 1, col);
            boom(maze, row, col - 1);
            boom(maze, row, col + 1);
            boom(maze, row + 1, col);
        }
    }
}

boom(maze, 2, 2);

for (var row = 0; row < maze.length; row++) {
    for (var col = 0; col < maze[row].length; col++) {
        process.stdout.write(maze[row][col] + ' ');
    }
    console.log();
}

// Next Task

function threeStr(one, second, third) {

    one = one.split(' ');
    second = second.split(' ');
    third = third.split(' ');
    var sameWord = '';
    var bigger = 0;


    for (var index = 0; index < one.length; index++) {
        for (var indexTwo = 0; indexTwo < second.length; indexTwo++) {
            for (var indexThree = 0; indexThree < third.length; indexThree++) {

                if (third[indexThree] == second[indexTwo] && third[indexThree] == one[index] && second[indexTwo] == one[index]) {
                    sameWord += third[indexThree] + ' ';



                }
            }
        }
    }
    console.log('The word is: ' + sameWord);
}

var firstSentence = 'Super mnogo kilograma sym stanal';
var secondSentence = 'sym gyzar koito e Super';
var thirdSentence = 'emati kyv sym Super golem priqtel';

threeStr(firstSentence, secondSentence, thirdSentence);
