const mobileMenu = document.querySelector('.mobile-menu');
const linksInMobileMenu = document.querySelectorAll('.mobile-menu-content li a');
const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');

openButton.addEventListener('click', (event) => {
  event.preventDefault();
  mobileMenu.style.display = 'block';
});

closeButton.addEventListener('click', (event) => {
  event.preventDefault();
  mobileMenu.style.display = 'none';
});

linksInMobileMenu.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});

const works = [
  {
    name: 'Math Magicians',
    description: 'Math Magicians is a Single Page Application (SPA) created in React that allows users to make simple calculations & Read some famous Math Quotes - with some witty gifs and a fun UI.',
    imageURL: './images/projects/math-magicians.png',
    technologies: ['React', 'SCSS', 'JavaScript', 'HTML5'],
    liveURL: 'https://awais-amjed-math-magicians.netlify.app/',
    sourceURL: 'https://github.com/awais-amjed/math-magicians',
    details: {
      organization: 'Microverse',
      role: 'React Module',
      year: '2022',
    },
    backgroundColor: '#ffdead',
  },
  {
    name: 'Meow',
    description: 'I love cats but don\'t have any so I thought why not make a webapp for cat breeds \\¶-¶/ I know right! Anyways I created this using ReactJS. You can get to know about different breeds of Cats and their characteristics with beautiful images and a random fact.',
    imageURL: './images/projects/meow.png',
    technologies: ['React', 'SCSS', 'JavaScript', 'HTML5'],
    liveURL: 'https://awais-amjed-meow.netlify.app/',
    sourceURL: 'https://github.com/awais-amjed/meow',
    details: {
      organization: 'Microverse',
      role: 'React Capstone',
      year: '2022',
    },
    backgroundColor: '#4369b2',
  },
  {
    name: 'Al Mentoria',
    description: 'Al-Mentoria is a place for new developers to reserve a meeting with a more experienced programmer as their mentor based on a chosen topic - with a Ruby on Rails backend.',
    imageURL: './images/projects/al-mentoria.png',
    technologies: ['React', 'Redux Toolkit', 'JavaScript', 'Tailwind CSS'],
    liveURL: 'https://al-mentoria.herokuapp.com/',
    sourceURL: 'https://github.com/UpliftLab/al-mentoria-frontend',
    details: {
      organization: 'Microverse',
      role: 'Final Capstone',
      year: '2022',
    },
    backgroundColor: '#97bd34',
  },
  {
    name: 'Money Patrol',
    description: 'Divide your expenses into categories and make it easier to keep a check on them.',
    imageURL: './images/projects/money-patrol.png',
    technologies: ['Ruby on Rails', 'Bootstrap5', 'JavaScript', 'HTML5', 'SCSS'],
    liveURL: 'https://money-patrol.herokuapp.com/',
    sourceURL: 'https://github.com/awais-amjed/money-patrol',
    details: {
      organization: 'Microverse',
      role: 'Ruby on Rails Capstone',
      year: '2022',
    },
    backgroundColor: '#eeeeee',
  },
  {
    name: 'Giggy',
    description: 'Giggy is a collection of a few fun jokes related to Coding & Dark Humor.',
    imageURL: './images/projects/giggy.png',
    technologies: ['Webpack5', 'HTML5', 'CSS3', 'JavaScript'],
    liveURL: 'https://awais-amjed.github.io/giggy/',
    sourceURL: 'https://github.com/awais-amjed/giggy',
    details: {
      organization: 'Microverse',
      role: 'JavaScript Capstone',
      year: '2022',
    },
    backgroundColor: '#faebd7',
  },
  {
    name: 'To Do List',
    description: 'Keep a track of all the tasks you need to do and Check off ones you have completed - topped with some Quirky animations and a Clean UI.',
    imageURL: './images/projects/to-do-list.png',
    technologies: ['Webpack5', 'HTML5', 'SCSS', 'JavaScript'],
    liveURL: 'https://awais-amjed.github.io/to-do-list/',
    sourceURL: 'https://github.com/awais-amjed/to-do-list',
    details: {
      organization: 'Microverse',
      role: 'JavaScript Module',
      year: '2022',
    },
    backgroundColor: '#eeeeee',
  },
];

const worksSection = document.getElementById('portfolio');

works.forEach((work) => {
  let techs = '';

  work.technologies.forEach((tech) => { techs += `<li class="tag">${tech}</li>`; });

  worksSection.innerHTML += `<div class="card">
  <div class="project-image" style="background-color: ${work.backgroundColor}">
      <img src="${work.imageURL}" alt="${work.name} Screenshot">
  </div>
  <div class="project-description">
      <h3>${work.name}</h3>
      <div class="project-details">
          <p>${work.details.organization}</p>
          <p class="dot">&#x2B24;</p>
          <p class="project-details-color">${work.details.role}</p>
          <p class="dot">&#x2B24;</p>
          <p class="project-details-color">${work.details.year}</p>
      </div>
      <p>${work.description}</p>
      <ul class="tags-section">
          ${techs}  
      </ul>
      <input class="alignment-start button" type="button" value="See Project" id="${work.name}">
  </div>
</div>
`;
});

works.forEach((work) => {
  let techs = '';

  work.technologies.forEach((tech) => { techs += `<li class="tag">${tech}</li>`; });

  document.getElementById(work.name).addEventListener(
    'click', () => {
      document.body.style.overflow = 'hidden';

      document.getElementById('popup-window').innerHTML
        += `<div class="blended-background"></div>
        <div class="popup-window-content">
            <div class="card">
                <div class="project-title">
                    <div>
                        <h3>${work.name}</h3>
                        <div class="project-details">
                            <p>${work.details.organization}</p>
                            <p class="dot">&#x2B24;</p>
                            <p class="project-details-color">${work.details.role}</p>
                            <p class="dot">&#x2B24;</p>
                            <p class="project-details-color">${work.details.year}</p>
                        </div>
                    </div>
                    <a href="" id="popup-close-button"><i class="fas fa-times"></i></a>
                </div>
                <img src="${work.imageURL}" alt="Work 4 Screenshot">
                <div class="project-description">
                    <p>${work.description}</p>
                    <div class="description-wrapper">
                        <ul class="tags-section">
                            ${techs}
                        </ul>
                        <div class="button-wrapper">
                            <a href="${work.liveURL}" target="_blank" class="alignment-start button">See Live <i class="fas fa-link"></i></a>
                            <a href="${work.sourceURL}" target="_blank" class="alignment-start button">See Source <i class="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

      document.getElementById('popup-close-button').addEventListener(
        'click', (event) => {
          event.preventDefault();
          document.getElementById('popup-window').innerHTML = '';
          document.body.style.overflow = 'auto';
        },
      );
    },
  );
});

// Validate email field to have only lowercase characters
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailField = contactForm.elements.email;

  if (emailField.value === emailField.value.toLowerCase()) {
    contactForm.submit();
  } else {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.innerText = 'Use lowercase for Email Address';

    contactForm.insertBefore(
      errorMessage,
      contactForm.querySelector('.button'),
    );
  }
});