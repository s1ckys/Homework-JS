document.getElementById("numberInput").addEventListener("input", function () {
  const input = this.value.trim();
  const outputField = document.getElementById("wordOutput");

  if (input === "") {
      outputField.value = "";
      outputField.placeholder = "Word representation...";
      return;
  }

  const number = Number(input);

  if (!Number.isInteger(number) || number < 0 || number > 1000000) {
      outputField.value = "Invalid input! Enter a number between 0 and 1,000,000.";
      return;
  }

  outputField.value = numberToWords(number);
});

function numberToWords(num) {
  if (num === 0) return "zero";

  const belowTwenty = [
      "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
      "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
      "eighteen", "nineteen"
  ];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const thousandPowers = ["", "thousand", "million"];

  let words = "";

  function helper(n, index) {
      if (n === 0) return "";
      if (n < 20) return belowTwenty[n - 1] + " " + thousandPowers[index] + " ";
      if (n < 100) {
          let result = tens[Math.floor(n / 10)];
          if (n % 10 !== 0) {
              result += "-" + belowTwenty[(n % 10) - 1];
          }
          return result + " " + thousandPowers[index] + " ";
      }
      return belowTwenty[Math.floor(n / 100) - 1] + " hundred " + helper(n % 100, index);
  }

  let level = 0;
  while (num > 0) {
      if (num % 1000 !== 0) {
          words = helper(num % 1000, level) + words;
      }
      num = Math.floor(num / 1000);
      level++;
  }

  return words.trim();
}
