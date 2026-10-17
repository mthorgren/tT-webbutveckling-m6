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

function validateSearch(value) {
    if (value.trim() === "") {
        throw new Error("Du måste ange söktext.");
    }
}

// rensa sökfält

// visa felmeddelande



// -Eventlyssnare- // 

// När användaren klickar på "Sök"
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    try { 
        // Rensa gamla felmeddelanden
        errorElement.textContent = "";
        
        // Validera att söktext matades in
        validateSearch(searchInput.value);

        // Spara söktext
        let searchString = searchInput.value.trim();

        // Gör något
        console.log(searchString)

    } catch (error) {
        errorElement.textContent = error.message;
        console.error("Fel:", error.message);
    }

});


