let score=0;
function idreceiver(clicked){
       if(document.getElementById(String(clicked)).className=="hungry"){ 
         document.getElementById(String(clicked)).classList.remove("hungry");
        document.getElementById(String(clicked)).src="mole-game/mole-fed.png";
        document.getElementById(String(clicked)).classList.add("fed");
        score++;
      }
    };
function appear(){
let r= 4*Math.random();
document.querySelectorAll(".fed").forEach(item => {item.src="";});
document.querySelectorAll(".fed").forEach(item => {item.classList.remove("fed");});
document.querySelectorAll(".leaving").forEach(item => {item.src="";});
document.querySelectorAll(".leaving").forEach(item => {item.classList.remove("leaving");});
document.querySelectorAll(".sad").forEach(item => {item.src="mole-game/mole-leaving.png";});
document.querySelectorAll(".sad").forEach(item => {item.classList.add("leaving");});
document.querySelectorAll(".sad").forEach(item => {item.classList.remove("sad");});
document.querySelectorAll(".hungry").forEach(item => {item.src="mole-game/mole-sad.png";});
document.querySelectorAll(".hungry").forEach(item => {item.classList.add("sad");});
document.querySelectorAll(".hungry").forEach(item => {item.classList.remove("hungry");});
document.getElementById(String(Math.ceil(r))).src="mole-game/mole-hungry.png";
document.getElementById(String(Math.ceil(r))).classList.add("hungry");
}
  let runAgainAt = Date.now();
  function rafCounter() { 
    if(score==10){
      document.body.style.backgroundImage="url(mole-game/win.png)";
      document.getElementsByTagName("script").remove();
    }
    if (Date.now() > runAgainAt) {
      runAgainAt = Date.now() + 1000;
      appear();
    }
    requestAnimationFrame(rafCounter);
  }
 rafCounter();
