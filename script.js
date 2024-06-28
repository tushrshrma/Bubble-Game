let bottom = document.querySelector(".bottom");
let score = document.querySelector("#score");
let hit = document.querySelector("#hit")

let target = 0;
function setTarget(){
   target = Math.floor(Math.random()*10);
   hit.textContent = target; 
}

let num = 0;
score.textContent = num;
function increaseScore(){
    num += 150;
}

function makeBubble(){
    for( let i = 0; i < 243; i++){
       let div = document.createElement("div");
       div.classList.add ("bubble");
       bottom.appendChild(div);
       div.textContent = Math.floor(Math.random()*10);
    }
} 

let runtime = 60;
let time;

function timer(){
    if( runtime >= 0 ){
     time = setInterval(() => {
        document.querySelector("#timer").textContent = runtime;
        runtime --;
        if( runtime < 0){
            clearInterval(time);
            bottom.textContent = "GAME OVER";
        }
    }, 1000)
    }
}

bottom.addEventListener("click", (dets) => {
      if (Number(dets.target.textContent) === target){
        increaseScore();
        score.textContent = num;
        bottom.textContent = "";
        makeBubble();
        setTarget();
      }
      else{
        alert("Incorrect Selection")
      }
})

makeBubble();
timer();
setTarget();