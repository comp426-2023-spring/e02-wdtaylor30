function showHideShots() {
    let check = document.getElementById('opponent');
    
    // TODO: additional check for showing all options
    let radiorps = document.getElementsByClassName('rps shots');

    if (check.checked) {
        $('.shots').show();
    } else {
        $('.shots').hide();
    }
}

function startOver() {
    document.getElementById('userinput').reset();
    showHideShots();
}

// async since we're using fetch
async function playGame() {

    // use jquery to select game
    let game = $('input[type=radio][name=game]:checked').val();

    // define baseurl as 'app/'
    let baseurl = window.location.href + 'app/';
    // ? debug
    console.log(baseurl);

    // construct full path
    let url = baseurl + game + '/play/';
    // ? debug
    console.log(url);

    let response = await fetch(url);
    let result = await response.json();
    // ? debug
    console.log(response);
    console.log(result);
}