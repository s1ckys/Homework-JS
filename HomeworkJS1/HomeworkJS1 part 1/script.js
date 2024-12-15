let stringYear = prompt ("Please enter your year of birth");

let userYear = parseInt(stringYear);

let zodiacFormula = (userYear - 4) % 12;

if (zodiacFormula===0){
    console.log ("In chinese zodiac you are a Rat")
}
else if(zodiacFormula===1){
    console.log ("In chinese zodiac you are a Ox")
}
else if(zodiacFormula===2){
    console.log ("In chinese zodiac you are a Tiger")
}
else if(zodiacFormula===3){
    console.log ("In chinese zodiac you are a Rabbit") 
}
else if(zodiacFormula===4){
    console.log ("In chinese zodiac you are a Dragon")
}
else if(zodiacFormula===5){
    console.log ("In chinese zodiac you are a Snake")
}
else if(zodiacFormula===6){
    console.log ("In chinese zodiac you are a Horse")
}
else if(zodiacFormula===7){
    console.log ("In chinese zodiac you are a Goat")
}
else if(zodiacFormula===8){
    console.log ("In chinese zodiac you are a Monkey")
}
else if(zodiacFormula===9){
    console.log ("In chinese zodiac you are a Rooster")
}
else if(zodiacFormula===10){
    console.log ("In chinese zodiac you are a Dog")
}
else if(zodiacFormula===11){
    console.log ("In chinese zodiac you are a Pig")
}
else{
    console.log ("Not a valid input")
}