// script.js

function calculateY(a, x) {
    try {
        let y;

        if (x >= 2) {
            if (x ** 2 - 25 === 0) {
                throw new Error("Error: DivideByZero.");
            }
            if (a + x < 0) {
                throw new Error("Error: SqrtByNegative.");
            }
            y = (a / (x ** 2 - 25)) + Math.sqrt(a + x);
        } else if (0 <= x && x < 2) {
            if (a - x / 4 < 0) {
                throw new Error("Error: SqrtByNegative.");
            }
            y = 2 * Math.sqrt(a - x / 4);
        } else { // x < 0
            y = 0.3 * x;
        }

        return y;
    } catch (error) {
        alert(error.message);
        return null;
    }
}

function displayResult() {
    const a = parseFloat(document.getElementById('a').value);
    const x = parseFloat(document.getElementById('x').value);

    if (isNaN(a) || isNaN(x)) {
        alert("Error: Input elements a and x.");
        return;
    }

    const result = calculateY(a, x);

    if (result !== null) {
        document.getElementById('result').innerText = `Result: y = ${result}`;
    } else {
        document.getElementById('result').innerText = "Calculating error.";
    }
}