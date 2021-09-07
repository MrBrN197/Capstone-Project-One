const setupFeaturedSection = () => {
  const featureSection = document.querySelector('#featured-section .card-container');

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

  artists.forEach((artist) => {
    const card = createCard(artist);
    featureSection.appendChild(card);
  });
};
window.addEventListener('load', () => {
  setupFeaturedSection();
});