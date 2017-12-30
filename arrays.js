// Task 1 from hw 3;

var arr = [1, 2, 3, 4, 5, 6, 7, -12];
var secArr = new Array();
for (var index = 1; index <= arr.length; index++) {
    if (arr[index] % 3 == 0) {
        secArr.push(arr[index]);
    }
}

var lowest = secArr[0];
for (var a = 1; a <= secArr.length; a++) {
    if (secArr[a] < lowest) {
        lowest = secArr[a];
    }
}

console.log(lowest);

// Task 2 from hw 3;

var arr = [1, 2, 3, 4, 5];
var secArr = [];

for (var index = 0; index < arr.length; index++) {
    secArr.push(arr[index]);
}
for (var index = arr.length - 1; index >= 0; index--) {
    secArr.push(arr[index]);
}
console.log(secArr);

// Task 3 from hw 3:

var arr = [];
var num = 1;

arr.push(num, num);

for (var index = 0; index < 8; index++) {
    var sbor = arr[index] + arr[index + 1];
    arr.push(sbor);
}

console.log(arr);

// Task 4 from hw 3:

var arr = [1, 2, 2, 1, 1];
var arr2 = arr.slice(); 

var secArr = [];
var count = 0;
var result = 0;

for (var i = 0; i < arr2.length; i++) {             // loop fot counting the elements in the array
    count++;
}
for (var index = 0; index < count; index++) {       // loop for cutting the last element from...                          
    var element = arr.pop();                     //"arr" and pushing it in "secArr"
    secArr.push(element);
}
for (var i = 0; i < count; i++) {           // loop for checking the elements from both arrays
    if (arr2[i] == secArr[i]) {
        result++;
    }
}
if (result == count) {      //if number of checked elements is equal to number of elements => Mirrored!
    console.log('da');
} else {
    console.log('ne');
}

// Task 5 from hw 3:

var arr = [];

for (var index = 1; index <= 10; index++) {
    var a = (index - 1) * 3;
    arr.push(a);
}
console.log(arr);


// Task 6 from hw 3:

var firstArr = [1, 2, 3, 5, 2];
var secondArr = [1, 2, 3, 5];
var count = 0;
var secCount = 0;
var thirdCount = 0;

for (var index = 0; index < firstArr.length; index++) { // count the number of items in first array
    count++;
}
for (var index = 0; index < secondArr.length; index++) { // count the number of items in second array
    secCount++;
}

if (secCount != count) {                                // if they aren't equal
    console.log('the arrays aren\'equal by size and values');
} else {                                                // if ther are equal (now we have to check are they equal by value)
    for (var i = 0; i <= firstArr.length; i++) {
        if (firstArr[i] == secondArr[i]) {              //counter to check if all of the items are equal in both arrays
            thirdCount++;
        }
    }
    if (thirdCount == i) {
        console.log('the arrays are equal by size and value')
    } else {
        console.log('the arrays are equal by size, but not equal by value')
    }
}

// Task 7 from hw 3:

var arr = [2, 3, -11, 7];
var secArr = [];
var el = 0;

for (var index = 0; index < arr.length; index++) {
    if (index == 0) {                               // if we are on the first element
        el = arr[index + 1];
    }
    else if (index == arr.length-1) {               // if we are on the last element
        el = arr[index - 1];
    } else {                                        // if we are on every other element
        el = arr[index - 1] + arr[index + 1];        
    }
    secArr.push(el);
}
console.log(secArr);

// Task 8 from hw3:

var arr = [1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4];
var count = 0;
var value = 0;
var valueHolder = 0;

for (var index = 0; index < arr.length; index++) {
    if (arr[index] == arr[index + 1]) {
        count++;
        value = count + 1;
    }
    if (arr[index] != arr[index + 1]) {
        count = 0;
        if (valueHolder < value) {
            valueHolder = value;
        }
        value = 0;
    }
}

console.log('Most repeating counts: ' + valueHolder);

// Task 9 from hw 3:
// First way with 2 arrays:

var arr = [1, 2, -3, 11];
var secArr = [];
var count = 0;
for (var i = 0; i < arr.length; i++) {
    count++;
}
for (var index = 0; index < count; index++) {
    var element = arr.pop();
    secArr.push(element);
}
console.log(secArr);

// Second way only with one array:

var arr = [1, 2, -12, 55];
var indexValue = 0;          // variable, needed for begining value of arr[indexValue] in middle loop;
var a = arr.length - 1;      // variable, needed for last element in the array;
var elements;                   
var count = 0;

for (var arrLength = 0; arrLength < arr.length; arrLength++) { // save arr length in var;
    count++;
}

for (var index = count; index > 0; index--) {                 // we're taking every element from the last one and push it in array
    elements = arr[indexValue + a];
    arr.push(elements);
    a--;   
}

for (var h = 0; h < count; h++) {                             // cut first original elements in array, and only new ones will remain
    arr.shift();
}

console.log(arr);

// Task 10 from hw 3:

var arr = [1,2,3,4,5,6,7];
var sum = 0;
for (var index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
}
sum /= arr.length;

var secArr = [];
for (var i = 0; i < arr.length; i++) {
    var closest = Math.abs(arr[i] - sum);
    secArr.push(closest);
}

var difference = secArr[1];
var indexNumber = 0;
for (var a = 0; a <= secArr.length; a++) {
    if (difference > secArr[a]) {
        difference = secArr[a];
        indexNumber = a;
    }
}
console.log(sum + ' this is the average value.');
for (var index = 0; index < arr.length; index++) {
    if (index == indexNumber) {
        console.log(arr[index] + ' this is the closest number to the average value.');
    }
}

// Task 11 form hw 3:

var arr = [-23, -55, 17, 75, 56, 105, 134];
var count = 0
for (var index = 0; index < arr.length; index++) {
    if (arr[index] % 5 == 0 && arr[index] > 5) {
        count++;
        console.log(arr[index]);

    }
}
console.log('The numbers are: ' + count);

// Task 12 from hw 3:

var arr = [1, 2, 3, 4, 5, 6, 7];
var b;

//  third variable:
b = arr[0];
arr[0] = arr[1];
arr[1] = b;

//  summation:
arr[2] = arr[2] + arr[3];
arr[3] = arr[2] - arr[3];
arr[2] = arr[2] - arr[3]

//  multyply:
arr[4] = arr[4] * arr[5];
arr[5] = arr[4] / arr[5];
arr[4] = arr[4] / arr[5]

console.log(arr);

// Task 13 from hw 3:

var number = 99;
var bits = 20;
var arrNumber = [];

while ((number & (1 << bits)) === 0) {
    bits--;
}

for (; bits >= 0; bits--) {
    if ((number & (1 << bits)) === 0) {
        var zero = process.stdout.write(0+'');
        arrNumber[zero];
    } else {
        var one = process.stdout.write(1+'');
        arrNumber[one];
    }
}

// Task 14 from hw 3:

var arr = [7.1, 8.5, 0.2, 3.7, 0.99, 1.4, -3.5, -110, 212, 341, 1.2];

for (var index = 0; index < arr.length; index++) {
    if (arr[index] >= -2.99 && arr[index] <= 2.99) {
        console.log(arr[index]);
    }
}

// Task 15 from hw 3:

var arr = [1, 2.2, 15, 14.2, 7.9, 1.9, 10];

var first = 0;
var second = 0;
var third = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
        first = arr[i];
    }
}

for (var a = 0; a < arr.length; a++) {
    if (arr[a] > second && arr[a] < first) {
        second = arr[a];
    }
}

for (var b = 0; b < arr.length; b++) {
    if (arr[b] > third && arr[b] < first && arr[b] < second) {
        third = arr[b];
    }
}

process.stdout.write(first + ' ' + second + ' ' + third);

// Task 16 from hw 3:

var arr = [-1.12, -2.43, 3.1, 4.2, 0, 6.4, - 7.5, 8.6, 9.1, -4];

for (var index = 0; index < arr.length; index++) {
    if (arr[index] < -0.231) {
        arr[index] = Math.round((index * index) + 41.25);
    } else {
        arr[index] = Math.round(arr[index] * (index + 1));
    }
}

process.stdout.write(arr + '')

// Task 17 from hw 3:

var arr = [1, 2, 1, 2, 1];

var up = true;

if (arr[0] < arr[1]) {
    up = false;
}
var flag = true;

for (var i = 1; i < arr.length; i++) {
    if (up) {
        if (arr[i] >= arr[i - 1]) {
            flag = false;
            break;
        }
    } else {
        if (arr[i] <= arr[i - 1]) {
            flag = false;
            break;
        }
    }
    up = !up;
}

if (flag) {
    console.log('Zig-Zag')
} else {
    console.log('Not ZigiZagi')
}

// Task 18 from hw 3:

var arrOne = [18, 19, 32, 1, 3, 4, 5, 6, 7, 8];
var arrTwo = [1, 2, 3, 4, 5, 16, 17, 18, 27, 11];
var arr = [];

for (var i = 0; i < arrOne.length; i++) {
    if (arrOne[i] < arrTwo[i]) {
        arr.push(arrTwo[i])
    } else {
        arr.push(arrOne[i])
    }
}

console.log(arrOne);
console.log(arrTwo);
console.log(arr);

// Other array // Tasks:
// Task 1:

var workers = ['Dani', 'Joro', 'Angel', 'Stefcho', 'Niki'];
var salaries = [2000, 2500, 1500, 1200, 1500];
var biggest = salaries[0];
var lowest = salaries[0];
var topWorker;
var worstWorker;
var sum = 0;
var average = 0;

for (var i = 0; i < workers.length; i++) {
    if (biggest < salaries[i]) {
        biggest = salaries[i];
        topWorker = workers[i];

    }
    if (lowest > salaries[i]) {
        lowest = salaries[i];
        worstWorker = workers[i];
    }

    sum += salaries[i];
    average = sum / salaries.length;
}

console.log('most high payed worker: ' + topWorker + ' and his salary is: ' + biggest);
console.log('worst payed worker: ' + worstWorker + ' and his salary is: ' + lowest);
console.log('ammount of every salaries: ' + sum);
console.log('the average of all salaries: ' + average);

// Task 2:
var temperatures = [5, 7, 4, 8, 10, 10, 11, 12, 13, 8, 7, 6, 5, 4, 7, 12, 10, 12, 11, 10, 9, 8, 10, 13, 15, 16, 12, 11, 10, 10];
var sum = 0;
var average = 0;
var coldCount = 0;
var coldestDays = [];
var coldDaySaver = 0;
var value = 0;
var count = 0;

for (var i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
    average = sum / temperatures.length;
}
for (var i = 0; i < temperatures.length; i++) {
    if (average > temperatures[i]) {
        coldCount++;
        coldestDays.push(temperatures[i]);
    }
}

for (var i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > temperatures[i + 1]) {
        count++;
        value = count + 1;

    }
    if (temperatures[i] <= temperatures[i + 1]) {
        count = 0;
        if (coldDaySaver < value) {
            coldDaySaver = value;
        }
        value = 0;
    }

}

console.log('the average tmprerature for the month: ' + average);
console.log('dates with coldest days: ' + coldestDays + ' they are: ' + coldCount + ' days');
console.log('the days, which every day gets colder are: '+coldDaySaver+' days')

// Task 1 from other array // Tasks:

var arr = [1, 2, 2, 23, 4];
var isNegative = false;
for (var index = 0; index < arr.length; index++) {
    if (arr[index] < 0) {
        isNegative = true;
        break;
    } else {
        isNegative = false;
    }
}
if (!isNegative) {
    console.log('They are positive')
} else {
console.log('There is one or more negative numbers')
}

// Task 3 from other array // Tasks:

var special = 7;
var thereIsSPecial = false;
var arr = [1, 2, 3, 4, 5, 6, 8];
for (var index = 0; index < arr.length; index++) {
    if (arr[index] == special) {
        console.log('This is my lucky number: ' + arr[index] + ' and it\'s on position: ' + (index + 1));
        thereIsSPecial = true;
    }
}
if (!thereIsSPecial) {
    var luckyNumber = Math.round(Math.random(1) * arr.length);
    console.log('THis isnt my lyucky number ' + luckyNumber);
}

// Task 4 from other array // Tasks:
var a;
var arr = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0];
for (var index = 0; index < arr.length; index++) {
    if (arr[index] == 1) {
        a = arr.splice(index, 1);
        arr.push(a.toString());
    }
}
console.log(arr);

// 2D arays // Task:
// Task 5 from other  array // Tasks:

var arr = [[1, 2], [2, 3], [5, 9], [123]];
var indexRow = 0;                           // will be equal to index of the row, to enter in first if
var sum = 0;                                // for summation of col elements
var result = 0;                             // for keeping the highest sum of col element (this is what we need)

for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
        if (indexRow == row) {
            sum += arr[row][col];           // make the sum of the elements and keep it until row 1038
        }
    }
    result = sum;
    if (result < sum) {
        result == sum;
    }
    sum = 0;                                // make it zero for the next loop;
    indexRow++;
}
console.log(result);

// 2D arays // Task:
// Task 6 from other  array // Tasks:

var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
        if (row == col) {
            process.stdout.write(arr[row][col]+' ');
        }
    }
    console.log();
}

// 2D arays // Task:
// Task 7 from other arrays // Tasks:

var arr = [[1, 2, 3, 2, 2], [4, 5, 6, 2, 2], [7, 8, 9, 2, 2], [7, 8, 9, 2, 2], [7, 8, 9, 2, 2]];

for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {

        if (row !== col && col < row) {
            process.stdout.write(arr[row][col] + ' ');
        }
    }
    console.log()
}

// 2D arays // Task:
// Task 8 from other array // Task:

var arr = [[true, false, false], [false, false, false], [false, false, false]];

for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
        if (row + col <= arr.length - 2) {
            if (arr[row][col] == true) {
                console.log('there is true in this room');
                console.log();
            }
        }
        process.stdout.write(arr[row][col]+' ');
    }
    console.log()
}

// 2D arays // Task:
// Task 9 from other array // Task:

var arr = [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 4]];
var sum = 0;
var result = 0;

for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
        if (row < arr.length - 1 && col < arr[row].length - 1) {

            var a = arr[row][col];
            var b = arr[row][col + 1];
            var c = arr[row + 1][col];
            var d = arr[row + 1][col + 1];

            sum = sum + (a + b + c + d);
            result = sum;

        }
        if (result < sum) {
            result = sum;
        }
        sum = 0;
    }
}

console.log(result);

// Task 10 from other arrays // Tasks:

var arr = [1, 2, 1, 2, 2, 1, 1, 1, 1];
var sum = 0;
var check = 1;
var element;

for (var first = 0; first < arr.length; first++) {
    for (var second = first; second < arr.length; second++) {
        if (arr[first] == arr[second]) {
            sum++;
        }
        if (check < sum) {
            check = sum;
            element = arr[second];
        }
    }
    sum = 0;
}

console.log('how many: ' + check + ' this is the item: ' + element)

// 2D arays // Task:
// Task 1:

var n = 1;
var arr = new Array(4);
for (var index = 0; index < arr.length; index++) {
    arr[index] = new Array(5)
}

for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
        arr[row][col] = n;
        process.stdout.write(arr[row][col] + ' ');
        n++;
    }
    console.log();
}

// Task 2:

var n = 1;
var arr = new Array(5);
for (var row = 0; row < arr.length; row++) {
    arr[row] = new Array(4);
}

for (var col = 0; col < arr[0].length; col++) {
    if (col % 2 == 0) {
        for (var row = 0; row < arr.length; row++) {
            arr[row][col] = n++;
        }
    } else {
        for (var row = arr.length-1; row >= 0; row--) {
            arr[row][col] = n++;
        }
    }

}

for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
        process.stdout.write(arr[row][col] + ' ');
    }
    console.log()
}

// Task 3:

var a = new Array(5);
for (var row = 0; row < a.length; row++) {
    a[row] = [0, 0, 0, 0];

}

var c = 1;
for (var r = 0; r < a.length; r++) {
    var col = 0;
    var row = r;
    while ((row >= 0) && (col < a[0].length)) {
        a[row][col] = c++;

        row--;
        col++;
    }
}

for (var cdj = 1; cdj < a[0].length; cdj++) {
    var col = cdj;
    var row = a.length - 1;
    while ((row >= 0) && (col < a[0].length)) {
        a[row][col] = c++;

        row--;
        col++;
    }
}

for (var row = 0; row < a.length; row++) {
    for (var col = 0; col < a[row].length; col++) {
        process.stdout.write(a[row][col] + " ");
    }
    console.log();
}