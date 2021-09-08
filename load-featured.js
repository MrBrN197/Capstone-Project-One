const setupFeaturedSection = () => {
  const featureSection = document.querySelector('#featured-section');
  const cardContainer = featureSection.querySelector('.card-container');
  const moreBtn = featureSection.querySelector('.more-button');

  const artists = [
    {
      name: 'Obafemi Moyosade',
      image: 'https://images.unsplash.com/photo-1527735095040-147bffb4cede?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima nesciunt, facere odit repudiandae eveniet saepe sapiente!',
      heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, necessitatibus.',
    },
    {
      name: 'Jonathan Cooper',
      image: 'https://images.unsplash.com/photo-1563240619-44ec0047592c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima nesciunt, facere odit repudiandae eveniet saepe sapiente!',
      heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, necessitatibus.',
    },
    {
      name: 'Melvin Ankrah',
      image: 'https://images.unsplash.com/photo-1606208397452-29faa5b695f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima nesciunt, facere odit repudiandae eveniet saepe sapiente!',
      heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, necessitatibus.',
    },
    {
      name: 'Jessica Felicio',
      image: 'https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima nesciunt, facere odit repudiandae eveniet saepe sapiente!',
      heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, necessitatibus.',
    },
    {
      name: 'Karina Tes',
      image: 'https://images.unsplash.com/photo-1512646605205-78422b7c7896?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima nesciunt, facere odit repudiandae eveniet saepe sapiente!',
      heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, necessitatibus.',
    },
    {
      name: 'Prince Akachi',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima nesciunt, facere odit repudiandae eveniet saepe sapiente!',
      heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, necessitatibus.',
    },
    {
      name: 'Oladim Odunsi',
      image: 'https://images.unsplash.com/photo-1600873499830-2e2c3f2ebc67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima nesciunt, facere odit repudiandae eveniet saepe sapiente!',
      heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, necessitatibus.',
    },
    {
      name: 'Taylor Peere',
      image: 'https://images.unsplash.com/photo-1521417531039-75e91486cc40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1015&q=80',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima nesciunt, facere odit repudiandae eveniet saepe sapiente!',
      heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, necessitatibus.',
    },
    {
      name: 'Akë',
      image: 'https://images.unsplash.com/photo-1505282722405-413748d3de7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima nesciunt, facere odit repudiandae eveniet saepe sapiente!',
      heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, necessitatibus.',
    },
    {
      name: 'Corey Young',
      image: 'https://images.unsplash.com/flagged/photo-1564434369363-696a2e6d96f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima nesciunt, facere odit repudiandae eveniet saepe sapiente!',
      heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, necessitatibus.',
    },
    {
      name: 'Behn Houz',
      image: 'https://images.unsplash.com/photo-1616165680859-60a8039e3695?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima nesciunt, facere odit repudiandae eveniet saepe sapiente!',
      heading: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, necessitatibus.',
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

  const index = 4;
  artists.slice(0, index).forEach((artist) => {
    const card = createCard(artist);
    cardContainer.appendChild(card);
  });

  moreBtn.addEventListener('click', () => {
    moreBtn.classList.add('loading');
    moreBtn.querySelector('span.icon').remove();
    const span = document.createElement('span');
    span.classList.add('icon');
    span.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>';
    moreBtn.appendChild(span);

    setTimeout(() => {
      artists.slice(index).forEach((artist) => {
        const card = createCard(artist);
        cardContainer.appendChild(card);
      });
      moreBtn.remove();
    }, 1000);
  });
};
window.addEventListener('load', () => {
  setupFeaturedSection();
});