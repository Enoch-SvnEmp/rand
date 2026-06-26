

// javascript code for media query changes applicable............
// select the Elements
const menuButton = document.getElementById('mobile-menu');
const navLinkslist = document.getElementById('nav-links');
const navActions = document.getElementById('nav-actions');

// listen for a user click
menuButton.addEventListener('click', () => {
    // toggle the 'active' class on the menu list to slide it in/out
    navLinkslist.classList.toggle('active');

    // toggle the 'is-active' class on the button itself to turn the bars into X
    menuButton.classList.toggle('is-active')
    ;
    // toggle the 'active' class on the nav-actions
    navActions.classList.toggle('active');
});




// javascript for main request form
// javascript to take and accept user input 
const submitBtn = document.getElementById('submit-btn'); //id of the submit button

// ID 's that are responsible for acceptance n javascript
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const dateOb = document.getElementById('dateOb');

// ID 's that are responsible for display n javascript
const postFullName = document.getElementById('post-intro');
const postAge = document.getElementById('post-age');

// ............................................................................
// creating my own functions and insert them into the event listener (submitBtn)
// ....................................................................................... 

// creating a function to toggle between displaying 'main-post' when the 'submit' is 'clicked'
const mainPost = document.getElementById('main-post')
function display() {
    mainPost.classList.toggle('display')
};

// a function to remove main-post and all data when the user clicks on the clear button
const clearBtn = document.getElementById('clear-btn');
function clear() {
    mainPost.classList.remove('display');
    firstName.value = '';
    lastName.value = '';
    dateOb.value = '';
    postFullName.innerHTML = '';
    postAge.innerHTML = '';
    removeErrorClassFromAll();
}

// creating a function to add and remove error class from the input fields
function addErrorClass(element) {
    element.classList.add('error');
}

function removeErrorClass(element) {
    element.classList.remove('error');
}

function removeErrorClassFromAll() {
    removeErrorClass(firstName);
    removeErrorClass(lastName);
    removeErrorClass(dateOb);
}

// function to remove the error class from all input fields when the user enters data in any of the input fields
function enterData(element) {
    element.addEventListener('input', () => {
        removeErrorClass(element);
    });
}

// a function to void read to force a browser reflow (restart the animation) when the user enters data in any of the input fields
function voidRead(element) {
        void element.offsetWidth;
}

// creating a general function to make sure the user entered the required field 
function data_valid(){
    // make sure the user actually entered data
    removeErrorClassFromAll();
    voidRead(firstName);
    voidRead(lastName);
    voidRead(dateOb);
    if (!firstName.value || !lastName.value || !dateOb.value) {
        

        if (!firstName.value && !lastName.value && !dateOb.value) {

            addErrorClass(firstName);
            addErrorClass(lastName);
            addErrorClass(dateOb);

        } else if (!lastName.value && !firstName.value) {
            removeErrorClass(dateOb);
            addErrorClass(firstName);
            addErrorClass(lastName);

        } else if (!dateOb.value  && !firstName.value) {
            removeErrorClass(lastName);
            addErrorClass(dateOb);
            addErrorClass(firstName);

        } else if (!dateOb.value  && !lastName.value) {
            removeErrorClass(firstName);
            addErrorClass(dateOb);
            addErrorClass(lastName);

        } else if (!dateOb.value) {
            removeErrorClass(firstName);
            removeErrorClass(lastName);
            addErrorClass(dateOb);

        } else if (!firstName.value) {
            removeErrorClass(lastName);
            removeErrorClass(dateOb);
            addErrorClass(firstName);

        } else {
            removeErrorClass(firstName);
            removeErrorClass(dateOb);
            addErrorClass(lastName);

        };
        
        
        // alert('please enter the empty field');
    } else {
        // if the all data required is entered then 'main-post' will be displayed
        removeErrorClassFromAll();
        display();
    };
};

function greeting() {

    const fName = firstName.value;
    const lName = lastName.value;

    postFullName.innerHTML = `Hello World, My Name is ${fName} ${lName}`;
};

function ageCalculator() {
    // javascript code for calculating date of birth(AGE) 


    const today = new Date();
    const birthDate = new Date(dateOb.value);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    const d = today.getDate() - birthDate.getDate();
    // ........................................................
    // displaying calculated age result

    // if current month is before birth month or it's the birth month but the day has not arrive yet
    if (m < 0 || (m === 0 && d < 0)) {
        age--;
    };
    // edge case don't allow future dates
    if (age < 0) {
        alert('inverted timeline? pick a past date')
    } else {
        postAge.innerHTML = `I am ${age} years old`;
    }
    
};

// ....................................................................................
// adding functions to the input fields to remove the error class when the user enters data in any of the input fields
// ....................................................................................

enterData(firstName);
enterData(lastName);
enterData(dateOb);
// .................................................................................

// ....................................................................................
// adding event listener to the submit button to perform specified functions
// .................................................................................
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // .......................
    
    // ........................
    data_valid();
    // .......................
    greeting();
    // .......................
    ageCalculator();
     
});

// ....................................................................................
// adding event listener to the clear button to perform specified functions
// .................................................................................

clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clear();
});