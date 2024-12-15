function combine(names, surnames) {
    if (names.length !== surnames.length) {
      return "Please enter the same number of names and surnames";
    }

    let combined = "";
    for (let i = 0; i < names.length; i++) {
      combined += `${i + 1}. ${names[i]} ${surnames[i]}\n`;
    }
    return combined;
  }
  
  let firstNames = ["Alice", "Bob", "Charlie", "David", "Emily", "Frank", "Grace", "Henry", "Ivy", "Jack"];
  let lastNames = ["Johnson", "Smith", "Brown", "Davis", "Miller", "Wilson", "Moore", "Anderson", "Taylor", "Thomas"];

  let anotherNames = ["Alice", "Bob"];
  let anotherSurnames = ["Johnson", "Smith", "Brown"];
  console.log(combine(firstNames, lastNames));
  console.log(combine(anotherNames, anotherSurnames));