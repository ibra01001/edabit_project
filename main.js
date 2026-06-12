/* exo 1 
Create a function that takes two numbers as arguments and returns their sum.
Examples

addition(3, 2) ➞ 5

addition(-3, -6) ➞ -9

addition(7, 3) ➞ 10

Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.*/

// Solution 1
// level easy
// points earned 5
function addition(a, b) {
    return a + b;
}

/*exo 2
Write a function that takes the base and height of a triangle and return its area.
Examples

triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50

Notes

    The area of a triangle is: (base * height) / 2
    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.*/

// Solution 2
// level medium
// points earned 10
function triArea(base, height) {
    return (base * height) / 2;
}

/* exo 3
Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

    If f returns the larger number, return the string f.
    If g returns the larger number, return the string g.
    If the functions return the same number, return the string neither.

Examples

whichIsLarger(() => 5, () => 10) ➞ "g"

whichIsLarger(() => 25,  () => 25) ➞ "neither"

whichIsLarger(() => 505050, () => 5050) ➞ "f"

Notes

This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).*/

// Solution 3
// level medium
// points earned 10
function whichIsLarger(f, g) {
    f = f();
    g = g();

    if (f > g) {
        return "f";
    } else if (g > f) {
        return "g";
    } else {
        return "neither";
    }
}
/* exo 4
A decimal number can be represented as a sequence of bits. To illustrate:

6 = 00000110
23 = 00010111

From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

bitwiseAND(6, 23) ➞ 00000110

bitwiseOR(6, 23) ➞ 00010111

bitwiseXOR(6, 23) ➞ 00010001

Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
Examples

bitwiseAND(7, 12) ➞ 4

bitwiseOR(7, 12) ➞ 15

bitwiseXOR(7, 12) ➞ 11

Notes

JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.*/
// Solution 4
// level medium
// points earned 10
function bitwiseAND(n1, n2) {
    return n1 & n2;
}

function bitwiseOR(n1, n2) {
    return n1 | n2;
}

function bitwiseXOR(n1, n2) {
    return n1 ^ n2;
}

/* exo 5
Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.
Examples

numberSquares(2) ➞ 5

numberSquares(4) ➞ 30

numberSquares(5) ➞ 55

Explanation

    If n = 0 then the number of squares is 0
    If n = 1 then the number of squares is 1 + 0 = 1
    If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
    If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14

As you can see, for each value of n the number of squares is n squared + the number of squares from the previous value of n.
Notes

    Input is a positive integer.
    Square pyramidal number.*/
// Solution 5
// level medium
// points earned 10
function numberSquares(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i * i;
    }
    return total;
}
/*exo 6
Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.

Use the following formulas:

Perimeter of a square: 4 * side.
Perimeter of a circle: 6.28 * radius.

The catch is you can only use arithmetic or comparison operators, which means:

    No if... else statements.
    No objects.
    No arrays.
    No formatting methods, etc.

The goal is to write a short, branch-free piece of code.
Examples

perimeter("s", 7) ➞ 28

perimeter("c", 4) ➞ 25.12

perimeter("c", 9) ➞ 56.52
*/
// Solution 6
// level medium
// points earned 15
function perimeter(l, num) {
    return (l === "s") * 4 * num + (l === "c") * 6.28 * num;
}   
/* exo 7
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

    If the number is negative, return the related ancestor.
    If positive, return the related descendant.
    You are generation 0. In the case of 0 (male or female), return "me!".

Examples

generation(2, "f") ➞ "granddaughter"

generation(-3, "m") ➞ "great grandfather"

generation(1, "f") ➞ "daughter"

Notes

Check the Resources tab for helpful hints.
Generation	Male	Female
-3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter
*/
// Solution 7
//points earned 15
// level medium

function generation(x, y) {
    switch (x) {
        case -3:
            return y === "m" ? "great grandfather" : "great grandmother";
        case -2:
            return y === "m" ? "grandfather" : "grandmother";
        case -1:
            return y === "m" ? "father" : "mother";
        case 0:
            return "me!";
        case 1:
            return y === "m" ? "son" : "daughter";
        case 2:
            return y === "m" ? "grandson" : "granddaughter";
        case 3:
            return y === "m" ? "great grandson" : "great granddaughter";
        default:
            return "Invalid generation";
    }
}
/* exo 8
A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron.

Create a function that takes an integer n and returns the nth tetrahedral number.

Alternative Text
Examples

tetra(2) ➞ 4

tetra(5) ➞ 35

tetra(6) ➞ 56

Notes

There is a formula for the nth tetrahedral number.*/
// Solution 8
// level medium
// points earned 15
function tetra(n) {
    return (n * (n + 1) * (n + 2)) / 6;
}
// exo 9
/*
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
Examples

sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.

Notes

N/A*/
// Solution 9
// level hard
// points earned 40
function sevenBoom(arr) {
  for (const element of arr) {
    if (String(element).includes("7")) {
      return "Boom!";
    }
  }
  return "there is no 7 in the array";
}

/* exo 10
There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.

Tower of Hanoi

Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.
Examples

towerHanoi(3) ➞ 7

towerHanoi(5) ➞ 31

towerHanoi(0) ➞ 0

Notes

    The amount of discs is always a positive integer.
    1 disc can be changed per move.
    */
// Solution 10
// level hard
// points earned 40
function towerHanoi(discs) {
    let result = 1;

    for (let i = 0; i < discs; i++) {
        result = result * 2;
    }

    return result - 1;
}