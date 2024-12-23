function adding(numbersArray) {
    let totalSum = 0;
    let equationString = "";
    let fullEquation = "";
    let listElement = document.getElementById("list");
    let wrapperElement = document.getElementById("wrapper");
    
    for (let i = 0; i < numbersArray.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = numbersArray[i];
      listElement.appendChild(listItem);
      totalSum += numbersArray[i];
      equationString += numbersArray[i];
      if (i < numbersArray.length - 1) {
        equationString += " + ";
      }
    }
  
    let resultParagraph = document.createElement("p");
    resultParagraph.textContent = `The result is ${totalSum}.`;
    wrapperElement.appendChild(resultParagraph);
  
    let equationParagraph = document.createElement("p");
    equationParagraph.textContent = `${equationString} = ${totalSum}`;
    wrapperElement.appendChild(equationParagraph);
  }
  
  let array = [2, 10, 100, 30, 11];
  
  console.log(adding(array));
