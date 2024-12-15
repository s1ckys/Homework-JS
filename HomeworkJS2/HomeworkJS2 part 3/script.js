function strings(words){
    let combine = words[0] + " ";
    for(let i=1;i<words.length;i++){
        combine+=words[i] + " "; 
    }
    return combine;
}

let arrayString = ["Hello", "there", "students", "of", "SEDC", "!"];
let anotherArray = ["My", "first", "sentence", "made", "of", "separate", "strings"];
let testArray = ["This", "is", "a", "sentence", "with", "twenty", "strings.", "It", "is", "a", "long", "sentence,", "but", "it", "is", "still", "a", "sentence"];
console.log(strings(arrayString));
console.log(strings(anotherArray));
console.log(strings(testArray));