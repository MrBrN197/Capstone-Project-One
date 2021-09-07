const initializeListeners = () => {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = mobileMenu.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });

  hamburger.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
  });
};

window.addEventListener('load', () => {
  initializeListeners();
});
