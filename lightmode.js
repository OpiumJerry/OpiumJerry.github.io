const isLightMode = localStorage.getItem('lightmode');

if (isLightMode) {
   body.classList.add('light-mode');
   toggleSwitch.checked = true;
}
