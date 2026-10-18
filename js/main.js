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

const recipeSection = document.querySelector("#recipe"); 


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

// create recipe dom structure
function showRecipe(section, recipe) {

    const htmlString = `
        <article>
            <h3>${recipe.name}</h3>

            <img src="${recipe.image}" alt="Picture of ${recipe.name}">

            <div class="recipe-info">
                <p><strong>Servings:</strong> ${recipe.servings}</p>
                <p><strong>Prep time:</strong> ${recipe.prepTimeMinutes}</p>
                <p><strong>Cooking time:</strong> ${recipe.cookTimeMinutes}</p>
                <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
            </div>

            <h4>Ingredients</h4>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
            </ul>

            <h4>Instructions</h4>
            <ol>
                ${recipe.instructions.map(step => `<li>${step}</li>`).join("")}
            </ol>
        </article>
        `;

    // add to dom
    section.innerHTML = htmlString;
    
}



// När användaren klickar på "Sök"
async function initiateSearch(event) {
    event.preventDefault();
    
    try { 
        // Rensa gamla felmeddelanden
        errorElement.textContent = "";
        
        // Validera att söktext matades in
        validateSearch(searchInput.value);

        // Spara söktext
        const searchString = searchInput.value.trim();

        // Gör något
        // Rensa eventuella tidigare sökresultat
        messageElement.textContent = "";
        const result = await queryRemote(searchString, "https://dummyjson.com/recipes/search?q=" )
    
        // Rensa ev. tidigare recept-presentation
        recipeSection.innerHTML = "";
        
        // felhantering / presentera result

        if (result.length === 0) {
            messageElement.textContent = "INGE MAUD";
        } else {
            showRecipe(recipeSection, result[0]);
        }


    } catch (error) {
        errorElement.textContent = error.message;
        console.error("Fel:", error.message);
    }

};



// -Eventlyssnare- //
searchForm.addEventListener("submit", initiateSearch);

/*
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
        // Rensa eventuella tidigare sökresultat
        messageElement.textContent = "";
        const result = await queryRemote(searchString, "https://dummyjson.com/recipes/search?q=" )
    
        // Rensa ev. tidigare recept-presentation
        recipeSection.innerHTML = "";
        
        // felhantering / presentera result

        if (result.length === 0) {
            messageElement.textContent = "INGE MAUD";
        } else {
            showRecipe(recipeSection, result[0]);
        }


    } catch (error) {
        errorElement.textContent = error.message;
        console.error("Fel:", error.message);
    }

});


*/