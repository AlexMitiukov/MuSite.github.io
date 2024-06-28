// ������������� alert
function showAlert() {
    alert("This is an alert dialog!");
}

// ������������� confirm
function showConfirm() {
    let userResponse = confirm("Do you confirm this action?");
    if (userResponse) {
        alert("You confirmed the action.");
    } else {
        alert("You canceled the action.");
    }
}

// ������������� prompt
function showPrompt() {
    let userName = prompt("Please enter your name:");
    if (userName) {
        alert("Hello, " + userName + "!");
    } else {
        alert("You didn't enter your name.");
    }
}