let score = document.getElementById("score");
let cookie_button = document.getElementById("cookie_button");
let main_button = document.getElementById("main_button")
const videoUrl = "https://www.yout-ube.com/watch?v=WE3jOTpgf9c&t=50s"

var clicks = 0;
var click_power = 1;

//the variable for the popup windows
var i = 1;

cookie_button.addEventListener("click", main_click)



function main_click() {
    clicks += click_power;
    score.innerText = `Clicks: ${clicks}`;
    check_score();

}

function check_score() {
    //Color change (style.backgroundColor) and alert popups (alert)//
    if (clicks >= 5 && clicks < 6) {
        cookie_button.style.backgroundColor = 'red';
        alert("Do you press anything that asks you to click it?")

    }
    else if (clicks >= 8 && clicks < 9) {
        alert("Seriously... Can you please stop clicking me!?")

    //opens up a youtube video//

    }
    else if (clicks == 20) {
        window.open(videoUrl, '_blank').focus()
    }

    //opens up a random window, either being an image or a gif//

    else if (clicks == 30) {
        alert("BEACH BOLLEYBURR!")
        {
            for (i = 0; i<30; i++)
                if ((Math.floor(Math.random() * 2)) == 1){

                    window.open("popup1.html",`window${i}`,`height=200, width=200, top=${Math.floor(Math.random() * window.innerHeight)},left=${Math.floor(Math.random() * window.innerWidth)},resizable=yes`)

                } else {
                                    
                    window.open("popup2.html",`window${i}`,`height=200, width=200, top=${Math.floor(Math.random() * window.innerHeight)},left=${Math.floor(Math.random() * window.innerWidth)},resizable=yes`)

                }
        }
    }
}