//questionTwo

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".container");

async function getGames() {
    
    try {
        const response = await fetch(url);

        const results = await response.json();
    
        const games = results.results;
    
        resultsContainer.innerHTML = "";
    
        for (let i = 0; i < games.length; i++) {
            console.log(games[i].name);
    
            if( i === 8) {
                break;
            } 
            resultsContainer.innerHTML += `<div>Name: ${games[i].name}</div>`;
            resultsContainer.innerHTML += `<div>Rating: ${games[i].rating}</div>`;
            resultsContainer.innerHTML += `<div>No of Tags: ${games[i].tags.length}</div>`;
        } 
    }
    catch(error) {
        console.log("There is an error",  error);
        resultsContainer.innerHTML = "";
        resultsContainer.innerHTML += `<div class ="error">Sorry, an error occured</div>`;
    } 
    finally {
        console.log("This is a finally and will run in the log anyway");
    }
}

getGames();
