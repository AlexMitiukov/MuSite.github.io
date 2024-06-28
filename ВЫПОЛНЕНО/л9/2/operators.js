// If statement
function useIf() {
    let number = prompt("Enter a number:");
    if (number > 0) {
        alert("The number is positive.");
    } else if (number < 0) {
        alert("The number is negative.");
    } else {
        alert("The number is zero.");
    }
}

// Switch statement
function useSwitch() {
    let day = prompt("Enter a day of the week:");
    switch (day.toLowerCase()) {
        case 'monday':
            alert("Start of the work week.");
            break;
        case 'friday':
            alert("End of the work week.");
            break;
        case 'saturday':
        case 'sunday':
            alert("Weekend!");
            break;
        default:
            alert("Midweek day.");
            break;
    }
}

// For loop
function useFor() {
    let n = prompt("Enter a number:");
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    alert("The sum of the first " + n + " numbers is " + sum);
}

// While loop
function useWhile() {
    let n = prompt("Enter a number:");
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    alert("The sum of the first " + n + " numbers is " + sum);
}

// Do while loop
function useDoWhile() {
    let n = prompt("Enter a number:");
    let sum = 0;
    let i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);
    alert("The sum of the first " + n + " numbers is " + sum);
}

// Break and Continue
function useBreakAndContinue() {
    let result = "";
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break; // Exit the loop when i is 5
        }
        if (i % 2 === 0) {
            continue; // Skip even numbers
        }
        result += i + " ";
    }
    alert("Break and Continue result: " + result);
}

// Return statement
function useReturn() {
    function add(a, b) {
        return a + b; // Return the sum of a and b
    }

    let a = parseInt(prompt("Enter the first number:"));
    let b = parseInt(prompt("Enter the second number:"));
    let sum = add(a, b);
    alert("The sum of " + a + " and " + b + " is " + sum);
}