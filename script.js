let score = document.getElementById("score");
let cookie_button = document.getElementById("cookie_button");
let main_button = document.getElementById("main_button")
const videoUrl = "https://www.yout-ube.com/watch?v=WE3jOTpgf9c&t=50s"
const imageUrl = ""

var clicks = 0;
var click_power = 1;

cookie_button.addEventListener("click", main_click)



function main_click (){
    clicks += click_power;
    score.innerText = `Clicks: ${clicks}`;
    check_score();

 }

function check_score() {
     if (clicks >= 5 && clicks < 6) {
        cookie_button.style.backgroundColor = 'red';
        alert("Do you press anything that asks you to click it?")
    
     }
    else if  (clicks >= 8 && clicks <9) {
        alert("Seriously... Can you please stop clicking me!?")
        
    }
    else if (clicks == 20) {
        window.open(videoUrl,'_blank').focus()
    }
    else if (clicks ==30) {
        
    }
   }