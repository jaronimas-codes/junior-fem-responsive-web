const hamburgerBtn = document.getElementById('hamburger');
const desktopNav = document.getElementById('desktop-nav');




hamburgerBtn.addEventListener('click', showMainMenu);

function showMainMenu(){
  desktopNav.classList.toggle('hidden');
}