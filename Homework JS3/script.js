function calculateAge(){
    let inputAge = prompt ("Please enterm the amount of years")
    let species = prompt("Is it a dog or a human? (Enter 'dog' or 'human')");
    inputAge = parseInt (inputAge);
    
    if (!isNaN(inputAge)){
        if(species==="dog"){
            let result=inputAge * 7;
            return `The dog is ${result} in human years`
        }
        else if(species==="human"){
            let result=inputAge / 7;
            return `The human is ${result} in dog years`;
        }
        else{
            return "The species is invalid. Please enter if dog or human"
        }
    }
    else{
        return "Please enter a valid number."
    }
    
}

console.log(calculateAge())