let local = document.getElementById("homeTeam");
let foriegn = document.getElementById("awayTeam");
let home = 0;
let guest = 0;

//home team's management
function homePlusOne() {
     home ++;
     console.log(home)
     local.textContent = home;
}

function homePlusTwo() {
     home = home + 2;
     console.log(home)
     local.textContent = home;
}

function homePlusThree() {
    home = home + 3;
    console.log(home)
    local.textContent = home;
}
function resetBtn1() {
    local.textContent = 0;
    home = 0;
    console.log(local.textContent)
}

// guest team's management
function awayPlusOne() {
     guest ++;
     console.log(home)
     foriegn.textContent = guest;
}

function awayPlusTwo() {
    guest = guest + 2;
    console.log(home)
    foriegn.textContent = guest;
}

function awayPlusThree() {
    guest = guest + 3;
    console.log(home)
    foriegn.textContent = guest;
}
function resetBtn2() {
    foriegn.textContent = 0;
    guest = 0;
}
