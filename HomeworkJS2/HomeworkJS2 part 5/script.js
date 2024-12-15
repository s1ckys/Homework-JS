function sum(number){
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    for(let i = 0;i<number.length;i++){
        if(typeof number[i]==='number'){
            if(number[i]<min){
                min=number[i];
            }
            else if (number[i]>max){
                max=number[i];
            }
            else {
                continue;
            }
        }
    }
    return sum = min + max;
}

let array = [3, 5, 6, 8, 11];
let anotherArray = ["hello", 42, "world", 3.14, "JavaScript", 10, "Python", 27, "C++", 15];
console.log(sum(array));
console.log(sum(anotherArray));