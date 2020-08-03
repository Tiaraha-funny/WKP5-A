console.log('HELLO');

const recipes = [
  {
    title: 'Eggs',
    picture: 'https://img.huffingtonpost.com/asset/5ad4b95e1f0000270616d3f4.jpeg?ops=crop_24_856_5204_2751%2Cscalefit_720_noupscale',
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
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8JkQ2GXH8-fSubD8QbEq5ts_y3OJhh4srQw&usqp=CAU',
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
    picture: 'data:image/jpeg;base64,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',
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

    // handling the more info button
    const myInfo = document.querySelector('.moreInfo');

    const handleClickInfo = e => {
      console.log('I am clicked');

      if (e.target.matches('button.moreInfo')) {
        const parent = e.target.closest('article');
        const id = Number(parent.dataset.id);
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
        
        <div class="lists">
          <ol class="step">
              <p>Steps :</p>
              <li class="step"> ${recipeModal.steps.map(step => `<li>${step}</li>`).join('')}</li>
            </ol>
            <ul class="ingredients">
              <p>Ingredients :</p>
              <li class="ingredients"> ${recipeModal.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</li>
          </ul>
        </div>
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