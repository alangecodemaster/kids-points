let active = 'james';
function addPoint(){
  if(!localStorage.getItem(active)){
    localStorage.setItem(active, '1');
  }else{
    let newNumber = Number(localStorage.getItem(active));
    newNumber++;
    
    localStorage.setItem(active, newNumber.toString());
  }
//   document.querySelector(`#${active} points`).innerHTML = localStorage.getItem(active);
//   let audio = new Audio('https://res.cloudinary.com/alangecodemaster/video/upload/v1636300626/mixkit-page-forward-single-chime-1107-_AudioTrimmer.com_fx2soy.wav');
//   audio.play();
}

function changeName(name){
  active = name;
  if(document.querySelector(".child-container > div.active")){
    document.querySelector(".child-container > div.active").classList.remove("active");
  }
  document.querySelector(`#${name}`).classList.add("active");
}

window.addEventListener("load", ()=>{
  if(localStorage.getItem('james')){
    document.querySelector(`#james points`).innerHTML = localStorage.getItem('james');
  }
  if(localStorage.getItem('ruby')){
    document.querySelector(`#ruby points`).innerHTML = localStorage.getItem('ruby');
  }
  if(localStorage.getItem('asa')){
    document.querySelector(`#asa points`).innerHTML = localStorage.getItem('asa');
  }
});

function resetPoints(){
  if(localStorage.getItem('james')){
    localStorage.removeItem('james');
    document.querySelector("#james points").innerHTML = 0;
  }
  if(localStorage.getItem('ruby')){
    localStorage.removeItem(`ruby`);
    document.querySelector("#ruby points").innerHTML = 0;
  }
  if(localStorage.getItem('asa')){
    localStorage.removeItem('asa');
    document.querySelector("#asa points").innerHTML = 0;
  }
  let audio = new Audio('https://res.cloudinary.com/alangecodemaster/video/upload/v1636300626/mixkit-page-forward-single-chime-1107-_AudioTrimmer.com_fx2soy.wav');
  audio.play();
}
