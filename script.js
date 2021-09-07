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

const setupFeaturedSection = () => {
  const featureSection = document.querySelector('#featured-section .card-container');

  const artists = [
    {
      name: 'Yochai Benkler',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima nesciunt, facere odit repudiandae eveniet saepe sapiente!',
      heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, necessitatibus.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      name: 'Yochai Benkler',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima nesciunt, facere odit repudiandae eveniet saepe sapiente!',
      heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, necessitatibus.',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      name: 'Yochai Benkler',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima nesciunt, facere odit repudiandae eveniet saepe sapiente!',
      heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, necessitatibus.',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      name: 'Yochai Benkler',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima nesciunt, facere odit repudiandae eveniet saepe sapiente!',
      heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, necessitatibus.',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ];

  const createCard = (artist) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="image-container">
        <div class="image">
          <img src="${artist.image}" alt="">
        </div>
      </div>
      <div class="content">
        <h3>${artist.name}</h3>
        <p class="heading">${artist.heading}</p>
        <p class="description">${artist.description}</p>
      </div>`;
    return card;
  };

  artists.forEach((artist) => {
    const card = createCard(artist);
    featureSection.appendChild(card);
  });
};

window.onload = () => {
  initializeListeners();
  setupFeaturedSection();
};
