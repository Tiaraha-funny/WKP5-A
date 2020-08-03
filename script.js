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
    title: 'Rice',
    picture: 'https://bit.ly/2ZXyiKI',
    author: 'Linah',
    difficulty: 'medium',
    timing: '15',
    ingredients: ['rice', 'no salt', 'water'],
    steps: [
      'Put a pot on the fire',
      'Crack the eggs on it',
      'Wait, put them out',
      'Add some salt on it',
    ],
    id: 1596168522409,
  },
  {
    title: 'Beans',
    picture: 'https://bit.ly/2ZXyiKI',
    author: 'Mucka',
    difficulty: 'hard',
    timing: '20',
    ingredients: ['beans', 'salt', 'water'],
    steps: [
      'Put a pot of ro on the fire',
      'Crack the eggs on it',
      'Wait, put them out',
      'Add some salt on it',
    ],
    id: 1596168522409,
  },
];

//drag all the elements needed
const container = document.querySelector('.container');
const generateButton = document.querySelector('button.generate');

const outerModal = document.querySelector('.outer__modal');
const innerModal = document.querySelector('.inner__modal');

//code

const renderCard = () => {
  // check the recipes collection
  const recipeArray = Object.entries(recipes);
  console.table(recipeArray);

  // generate the HTML 
  recipes.forEach(recipe => {

    const myHTML = `
    <article>
      <div class="data" data-id = "${recipe.id}" data-steps = "${recipe.steps}" data-id = "${recipe.ingredients}">
        <h1>${recipe.title}</h1>
        <img class="recipeImg" src="${recipe.picture}"/>
        <div class="div">
          <p> Time: ${recipe.timing}</p>
          <p> Difficulty: ${recipe.difficulty}</p>
        </div>
          <button class="moreInfo btn">More info</button>
        </div>
    </article>  
`
    container.insertAdjacentHTML('afterbegin', myHTML);

    //Holding the lists of the step and the ingredients

    const myStep = recipe.steps;
    myStep.forEach(step => {
      return `
      <li></li>
      `
    });

    const myIngredient = recipe.ingredients;
    myIngredient.forEach(ingredient => {
      return `
      <li></li>
      `
    });

    // handling the more info button
    const myInfo = document.querySelector('.moreInfo');

    const handleClickInfo = e => {
      console.log('I am clicked');

      if (e.target.matches('button.moreInfo')) {
        const parent = e.target.closest('article');
        const id = Number(parent.dataset.id);
        const step  = parent.dataset;
        const ingredient = parent.dataset;
        const recipe = recipes.find(recipe => recipe.id === id);
        openModal(recipe);
      }
    };

  // The html covers the modal
  recipes.forEach(recipeModal => {

    let myModalHtml = `
        <h2>${recipeModal.title} <small> by ${recipeModal.author}</small></h2>
        <img class="modalImg" src="${recipeModal.picture}"/>
        <div class="div">
          <p>Time estimation : ${recipeModal.timing}</p>
          <p>Difficulty : ${recipeModal.difficulty}</p>
        </div>
        
        <ul>
          <div>
            <p>Steps :</p>
            <li class="step"> ${myStep}</li>
          </div>
          <div>
            <p>Ingredients :</p>
            <li> ${myIngredient}</li>
          </div>
        </ul>
    `
    innerModal.innerHTML = myModalHtml;

  });

      //For the opening the modal form

      const openModal = e => {
        console.log('add class');
        outerModal.classList.add('open');
      };
  
      const handleClick = e => {
        console.log('remove class');
  
        const isOutside = !e.target.closest('.inner__modal');
        if (isOutside) {
          outerModal.classList.remove('open');
        }
      };
  
      const handleEscape = e => {
        if (e.key === 'Escape') {
          outerModal.classList.remove('open');
        }
      };
  
      window.addEventListener('keydown', handleEscape);
      outerModal.addEventListener('click', handleClick);
      myInfo.addEventListener('click', handleClickInfo);
  
    });
  
};
// put it in the DOM

generateButton.addEventListener('click', renderCard);


/*     const steps = [];
for (stepChildren of stepListElement) {
  steps.push(stepChildren.children[0].value);
}

const ingredients = [];
for (ingredientChildren of ingredientListElement) {
  ingredients.push(ingredientChildren.children[0].value);
}
*/

//-------------------------------------------------------------------------------------------------------------------------

//  ***  FORM  ***

//Giving the form input

const addFormBtn = document.querySelector('.adding');

const handleClickAdd = e => {
  console.log('my form');
  outerModal.classList.add('open');
  innerModal.innerHTML = myFormHTML;
}

addFormBtn.addEventListener('click', handleClickAdd);


// HTML form

let myFormHTML = `

<form method="post" id="addrecipe">
  <p>
    <label class="input">What is the recipe name?</label><br>
    <input type="text" name="title" id="name" value="Potatoes"><br>
  </p>
  <p>
    <label class="input">Picture of the result (URL)</label><br>
    <input type="text" name="picture" id="picture" value="https://bit.ly/2ZXyiKI"><br>
  </p>
  <p>
    <label class="input" id="author">Who is the cook?</label><br>
    <input type="text" name="author" id="author" value="Peta Jeannie"><br>
  </p>
  <p>
    <label class="input">What is the difficulty?</label><br>
    <select class="option" name="difficulty" id="difficulty">
      <option value="easy">Easy</option><br>
      <option value="medium">Medium</option><br>
      <option value="hard">Hard</option><br>
      <option value="very difficult">Very Difficult</option>
    </select>
  </p>
  <p>
    <label>How much time does it take?</label><br>
    <select name="timing" class="timing" id="timing">
      <option value="less 15 min">Less that 15 munites</option><br>
      <option value="15 min">Exactly 15 miunites</option><br>
      <option value="30 min">Exactly 30 munites</option><br>
      <option value="45 min">Exactly 45 munites</option><br>
      <option value="60 min">Takes 60 munites</option><br>
      <option value="1 h">Around an hour</option>
    </select>
  </p>

  <nav>

    <label class="info">Ingredients</label><br>
    <ul id="ingredientList">
      <li>
        <input type="text" name="ingredients1" id="ingrendients1" placeholder="Type your thing to cook here"
          required></li><br>
    </ul>
    <button class="addIngredient" type="button">Add a new ingredient to the list</button><br>

    <label class="info">Steps</label><br>
    <ul id="stepList">
      <li><input type="text" name="steps1" id="steps1" placeholder="Type your next step here" required>
      </li><br>
    </ul>
    
    <button class="addStep" type="button">Add a new step to the list</button>

  </nav>

  <button class="submit" type="submit">Submit</button>

</form>
`