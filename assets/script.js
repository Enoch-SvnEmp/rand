// this javascript file will contain all the functions that will created and exported to other files for use
// utility functions that can be used in other files

// so now im goin to remove all other functions from other javascript files and place them here so that they can be imported and used in other files
// D R Y -- Don't Repeat Yourself

// ......................................................
// Utilis.js

// this function takes an array of elements instead of just one
// export function setupInputListeners(elementsArray) {

//     // loop through every single elements in the array
//     elementsArray.forEach(element => {
//         // safe check: skip if the element is not found
//         if (!element) return;

//         // attach the event listener to this specific element
//         element.addEventListener('input', () => {
//             // remove the error class when the user starts typing
//             element.classList.remove('error');
//         });
//     });
// }
// ......................................................

// function to check if a user is logged in
export function isUserLoggedIn() {
    // check if the user is logged in by checking the local storage and return true if the user is logged in, otherwise return false
    return localStorage.getItem('isloggedIn') === 'true';
}


// function to make an element shake (reuseable alert style)
export function triggerAttention(element) {
    element.classList.remove('error');
    void element.offsetWidth; // force a reflow to restart the animation
    element.classList.add('error');
    // remove the error class after the animation is done to allow for future triggers
    setTimeout(() => {
        element.classList.remove('error');
    }, 300);
}


// creating an export function to toggle between displaying 'main-post' when the 'submit' is 'clicked'
export function display(...elements) {
    elements.forEach(element => {
        if (!element) return;
        element.classList.toggle('display');
    });
}
// exporting a function to void read to force a browser reflow (restart the animation) when the user enters data in any of the input fields
export function voidRead(...elements) {
    // ensure the function can read multiple elements by placing them in an array
    elements.forEach(element => {
        // if the elements does not exist, exit the function immediately
        if (!element) return;
        void element.offsetWidth;
    });
}


// exporting function to remove the error class from all input fields when the user enters data in any of the input fields
export function enterData(...elements) {
    // ensure the function can read multiple elements by placing them in an array
    elements.forEach(element => {
        // if the elements does not exist, exit the function immediately
        if (!element) return;

        element.addEventListener('input', () => {
            removeErrorClass(element);
        });
    });
}


// adding an export function to let make main-req disappear when the user clicks on the submit button
export function disappear(...elements) {
    elements.forEach(element => {
        if (!element) return;
        element.classList.add('disappear');
    });
}
// adding an export function to let make element reappear when the user clicks on the submit button
export function reappear(...elements) {
    elements.forEach(element => {
        if (!element) return;
        element.classList.remove('disappear');
    });
}

// creating an export function to add and remove error class from the input fields
export function addErrorClass(...elements) {
    elements.forEach(element => {
        if (!element) return;
        element.classList.add('error');
    });
}

export function removeErrorClass(...elements) {
    elements.forEach(element => {
        if (!element) return;
        element.classList.remove('error');
    });
}



// adding an export function for user to introduce themselves with full name 
export function introName(fName, lName, postFullName) {
    postFullName.innerHTML = `Hello World, My Name is ${fName} ${lName}`;
}

// ........................................................................................................
// adding an export function ageCalculator to calculate the age of the user based on their date of birth
export function ageCalculator(dateOb, postAge) {
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