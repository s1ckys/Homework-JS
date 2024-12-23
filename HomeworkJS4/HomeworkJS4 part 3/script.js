function createRecipePage() {
  let recipeName = prompt("What is the name of the recipe?");

  let inputNumberOfIngredients = prompt(
    "How many ingredients do you need for the recipe?");
  const numberOfIngredients = parseInt(inputNumberOfIngredients);

  if (isNaN(numberOfIngredients) || numberOfIngredients <= 0) {
    alert("Please enter a valid number of ingredients.");
    return;
  }
  let ingredients = [];
  for (let i = 1; i <= numberOfIngredients; i++) {
    let ingredient = prompt(`Please input the name of ingredient number ${i}:`);
    ingredients.push(ingredient);
  }

  let recipeContainer = document.getElementById("recipe");
  let recipeTable = document.createElement("table");
  let headerRow = document.createElement("tr");
  let recipeHeaderCell = document.createElement("th");
  recipeHeaderCell.setAttribute("colspan", "2");
  recipeHeaderCell.textContent = recipeName;
  headerRow.appendChild(recipeHeaderCell);
  recipeTable.appendChild(headerRow);
  ingredients.forEach((ingredient, index) => {
    let row = document.createElement("tr");
    let cellNumber = document.createElement("td");
    let cellIngredient = document.createElement("td");
    cellNumber.textContent = index + 1;
    cellIngredient.textContent = ingredient;
    row.appendChild(cellNumber);
    row.appendChild(cellIngredient);
    recipeTable.appendChild(row);
  });

  recipeContainer.appendChild(recipeTable);
}
createRecipePage();
