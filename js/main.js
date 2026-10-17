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
    
    try { 
        // Rensa felmeddelanden
        errorElement.textContent = "";
        
        // Spara söktext
        let searchString = searchInput.value;

        // Validera att söktext matades in
        if (searchString.trim() == ""){
            throw new Error("Du måste ange söktext.")
        }
    
    } catch (error) {
        errorElement.textContent = error.message;
        console.error("Fel:", error.message);
    }

    // Gör något
});


