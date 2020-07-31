console.log('HELLO');

const recipes = [
  {
    title: 'Eggs',
    picture: 'https://bit.ly/2ZXyiKI',
    author: 'Onja',
    difficulty: 'easy',
    timing: '15',
    ingredients: ['eggs', 'salt', 'water'],
    steps: [
      'Put a pan on the fire',
      'Crack the eggs on it',
      'Wait, put them out',
      'Add some salt on it',
    ],
    id: 1596168482053,
  },
  {
    title: 'Eggs',
    picture: 'https://bit.ly/2ZXyiKI',
    author: 'Linah',
    difficulty: 'easy',
    timing: '15',
    ingredients: ['eggs', 'salt', 'water'],
    steps: [
      'Put a pan on the fire',
      'Crack the eggs on it',
      'Wait, put them out',
      'Add some salt on it',
    ],
    id: 1596168522409,
  },
  {
    title: 'My recipe',
    picture: 'https://bit.ly/2ZXyiKI',
    author: 'Mucka',
    difficulty: 'easy',
    timing: '15',
    ingredients: ['eggs', 'salt', 'water'],
    steps: [
      'Put a pan on the fire',
      'Crack the eggs on it',
      'Wait, put them out',
      'Add some salt on it',
    ],
    id: 1596168522409,
  },
];


const renderCard = () => {
  // check the recipes collection
  const recipeArray = Object.entries(recipes);
  console.table(recipeArray);

  // generate the HTML 
  recipes.forEach(recipe => {
    const myHTML = `
    <article>
      <h1>${recipe.title}</h1>
      <img src="${recipe.picture}"/>
      <p>${recipe.author}</p>
      <p>${recipe.timing}</p>
      <p>${recipe.difficulty}</p>
      <button class="data" data-id = "${recipe.id}">More info</button>
    </article>
`
    container.insertAdjacentHTML('afterbegin', myHTML);

    const myInfo = document.querySelector('.data');
      myInfo.addEventListener('click', e => {

      if (e.target.matches("button.data")) {
        const parent = e.target.closest("article");
        const id = (parent.dataset.id);
        const recipe = recipes.find(singleRecipe => singleRecipe.id === id);
        openModal(recipe);
      }
      console.log('I am clicked');
      
      //For the opening the modal form
      
      const openModal = e => {
        outerModal.classList.add('open');
        console.log('open modal');
      };

      const handleClick = e => {
        const isOutside = !e.target.closest('.inner__modal');
        if (isOutside) {
          outerModal.classList.remove('open');
        }
      };
      const handleEscape = e => {
        if (e.key === 'Escape') {
          outerModal.classList.remove('open');
        }
        window.addEventListener('keydown', handleEscape);
        outerModal.addEventListener('click', handleClick);
        myInfo.addEventListener('click', openModal);
      };
    })
  });
};

const outerModal = document.querySelector('.outer__modal');
const innerModal = document.querySelector('.inner__modal');

// put it in the DOM
// recipes.forEach(modal => {


// // For each dataObject, create a new card and append it to the DOM
// recipes.forEach(card => {
//   const container = document.querySelector('.container');
//   // container.classList.add('[data-id = "recipeId"]')
//   container.setAttribute('data-id', card.value);
//   console.log(container);
// });

const container = document.querySelector('.container');
const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);
