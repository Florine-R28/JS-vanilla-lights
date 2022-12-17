function switchLight(){

  const lightImg = document.getElementById('lightImg');
  const toggleBtnLabel = document.getElementById('toggleBtnLabel');
  //console.log(lightImg.src, typeof lightImg.src)
  if(lightImg.src.match('./resources/light-off.png')){
      lightImg.src = './resources/light-on.png';
     
      toggleBtnLabel.innerHTML = "Turn on";
  } else {
      lightImg.src = "./resources/light-off.png";
      
      toggleBtnLabel.innerHTML = 'Turn off';
  }
};

const init = () => {
  const toggleBtn = document.getElementById('toggleBtn'); 
  toggleBtn.addEventListener('click', switchLight);
};

window.onload = init;