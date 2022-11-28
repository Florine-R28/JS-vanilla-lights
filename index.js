function switchLight(){

  const lightImg = document.getElementById('lightImg');
  const toggleBtn = document.getElementById('toggleBtn');
  const btnStandBy = document.getElementById('toggleBtnLabel');

  if(toggleBtn.src.match("./resources/light-off.png")== -1){
      lightImg.src = "./resources/light-off.png";
      btnStandBy.innerHTML = "Turn off";
  } else {
      lightImg.src = "./resources/light-on.png";
      btnStandBy.innerHTML = "Turn on";
  }
};

const init = () => {
  toggleBtn.addEventListener('click', switchLight);
};

window.onload = init;