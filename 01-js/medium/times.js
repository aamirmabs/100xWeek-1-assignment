/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    // get start date time
    let start = new Date();

    // run loop
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }

    // get end date time
    let end = new Date();

    // calculate difference
    let diff = (end - start) / 1000.0;
    console.log(n, diff);

    return 0.01;
}

calculateTime(100);

calculateTime(100000);

calculateTime(1000000000);
