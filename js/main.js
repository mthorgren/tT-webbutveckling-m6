"use strict";
/*
 * Laboration 6 - Receptsökaren
 * Namn: DITT NAMN
 */

// -Hämta element från DOM- //

const searchForm = document.querySelector("#searchform");

const searchInput = document.querySelector("#search");

const errorElement = document.querySelector("#error");

// -Funktioner-

// validera sökfält/input

// rensa sökfält

// visa felmeddelande



// -Eventlyssnare- // 

// När användaren klickar på "Sök"
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // validera att söktext matades in
    let searchString = searchInput.value;
    if (searchString.trim() == ""){
        errorElement.textContent = "Du måste ange söktext.";
    }
    console.log(searchString);    



    
    // Gör något
});


