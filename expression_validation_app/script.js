document.querySelector('.choice_msg').innerHTML = "";
document.querySelector('.check_msg').innerHTML = "";

// Adding event listeners

document.querySelector('.choice-btn').addEventListener('click', select);
document.querySelector('.check-btn').addEventListener('click', valid);
document.querySelector('.refresh-btn').addEventListener('click', refresh);

let re;
let str;

// Declaring the select function

function select() {
    let choice = document.querySelector('.choice').value;

    if (choice == 1) {
        re = /^([a-zA-Z0-9](\.)?(\-)?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
        document.querySelector('.choice_msg').innerHTML = "Enter the email you wanna validate in the next box";
    }
    else if (choice == 2) {
        re = /^(\+)?(880)?(0)?[0-9]{10}$/;
        document.querySelector('.choice_msg').innerHTML = "Enter the phone number you wanna validate in the next box";
    }
    else if (choice == 3) {
        re = /^[0-9]{4}$/;
        document.querySelector('.choice_msg').innerHTML = "Enter the postcode you wanna validate in the next box";
    }
    else {
        document.querySelector('.choice_msg').innerHTML = "Please select a valid choice from the above list";
    }

}

// Declaring the validation function

function valid() {

    str = document.querySelector('.check').value;

    if (re.test(str) == true) {
        document.querySelector('.check_msg').innerHTML = 'The expression you entered is correct!';
    }
    else {
        document.querySelector('.check_msg').innerHTML = 'The expression you entered is wrong!';
    }
}

// Declaring refresh function

function refresh() {
    location = location;
}