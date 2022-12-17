function switchLight(){

  const lightImg = document.getElementById('lightImg');
  const toggleBtnLabel = document.getElementById('toggleBtnLabel');

  if(lightImg.src.includes('off')){
      lightImg.src = lightImg.src.replace('off', 'on');
      toggleBtnLabel.textContent = "Turn on";
  } else {
      lightImg.src = lightImg.src.replace('on', 'off');;
      toggleBtnLabel.textContent = 'Turn off';
  }
};

const init = () => {
  const toggleBtn = document.getElementById('toggleBtn'); 
  toggleBtn.addEventListener('click', switchLight);
};

window.onload = init;