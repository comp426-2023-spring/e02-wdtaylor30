// * IMPORTANT : When testing, run `npm test; npm start`
// * to start both frontend and backend.

function showHideShots() {
    let check = document.getElementById('opponent');
    let radiorps = document.getElementById('rps');

    if (check.checked) {
        if (radiorps.checked) {
            $('.rps').show();
            $('.rpsls').hide();
        } else {
            // show all
            $('.shots').show();
        }
    } else {
        $('.shots').hide();
    }
}

function startOver() {
    document.getElementById('userinput').reset();
    document.getElementById("results").style.display = "none";
    showHideShots();
}

// async since we're using fetch
async function playGame() {
    // get results ready to show
    let results = document.getElementById("results");
    results.style.display = "block";
    
    // use jquery to select game and shot
    let game = $('input[type=radio][name=game]:checked').val();
    let shot = $('input[type=radio][name=shot]:checked').val();

    // construct full path
    // have to do this manually bc the url looked weird with the
    // in-class example
    let url = `/app/${game}/play/${shot ? shot : ""}`;
    
    // for some reason the above ternary op adds a trailing quotation mark
    // so do some regex to remove it
    url = url.replace(/["]+/g, '');

    let response = await fetch(url);
    let result = await response.json();
    // ? debug
    console.log(response);
    console.log(result);

    // show results
    results.textContent = `You played: ${result.player}. Opponent played: ${result.opponent}. Result: ${result.result}`;
}