console.log('HELLO');

const recipes = [
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
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
		author: 'Loïc',
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
		author: 'Loïc',
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
  <h1>${recipe.title}</h1>
  <img src="${recipe.picture}"/>
  <p>${recipe.author}</p>
  <p>${recipe.timing}</p>
  <p>${recipe.difficulty}</p>
`
  container.insertAdjacentHTML('afterbegin', myHTML);
  
});
}
  //   // For each dataObject, create a new card and append it to the DOM
  // recipes.forEach((card, i) => {
  //   const positionFromLeft = i * 15;
  //   const cardElement = document.createElement('div');
  //   cardElement.setAttribute('data-value', card.value);
  //   cardElement.classList.add('card', `${card.suit}-${card.value}`);
  //   cardElement.style.left = `${positionFromLeft}px`;
  //   cardsWrapper.append(cardElement);
  // });
  // }
    
	// put it in the DOM

const container = document.querySelector('.container');
const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);
