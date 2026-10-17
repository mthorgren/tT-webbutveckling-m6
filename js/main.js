"use strict";
/*
 * Laboration 6 - Receptsökaren
 * Namn: DITT NAMN
 */

// -Hämta element från DOM- //

const searchForm = document.querySelector("#searchform");

const searchInput = document.querySelector("#search");

const errorElement = document.querySelector("#error");

const messageElement = document.querySelector("#message");

// -Funktioner-

// Sök på remote API

async function queryRemote(payload, target) {
    try {
        const response = await fetch(target + payload);

        
        // Kontrollera att anrop fungerar
        if (!response.ok) {
            throw new Error("Kunde inte hämta data från servern.");
        }

        var data = await response.json();

        // Validera att data mottogs, samt att det är av datatyp Array
        if (!data || !Array.isArray(data.recipes)) {
            throw new Error("Ogiltig datatyp eller tomt svar från servern.");
        }

        console.log(data.recipes)
        return data.recipes;

    } catch(error) {
        errorElement.textContent = error.message;
        console.error("Fel:", error.message);
    }
}

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
searchForm.addEventListener("submit", async function(event) {
    event.preventDefault();
    
    try { 
        // Rensa gamla felmeddelanden
        errorElement.textContent = "";
        
        // Validera att söktext matades in
        validateSearch(searchInput.value);

        // Spara söktext
        const searchString = searchInput.value.trim();

        // Gör något
        const result = await queryRemote(searchString, "https://dummyjson.com/recipes/search?q=" )

    } catch (error) {
        errorElement.textContent = error.message;
        console.error("Fel:", error.message);
    }

});


