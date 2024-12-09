let stringYear = prompt ("Please enter your year of birth");

let userYear = parseInt(stringYear);

let zodiacFormula = (userYear - 4) % 12;

switch (zodiacFormula){
    case 0: 
        console.log ("In chinese zodiac you are a Rat")
        break;
    case 1:
        console.log ("In chinese zodiac you are a Ox")
        break;
    case 2:
        console.log ("In chinese zodiac you are a Tiger")
        break;
    case 3:
        console.log ("In chinese zodiac you are a Rabbit")
        break;
    case 4:
        console.log ("In chinese zodiac you are a Dragon")
        break;
    case 5:
        console.log ("In chinese zodiac you are a Snake")
        break;
    case 6:
        console.log ("In chinese zodiac you are a Horse")
        break;
    case 7:
        console.log ("In chinese zodiac you are a Goat")
        break;
    case 8:
        console.log ("In chinese zodiac you are a Monkey")
        break;
    case 9:
        console.log ("In chinese zodiac you are a Rooster")
        break;
    case 10:
        console.log ("In chinese zodiac you are a Dog")
        break;
    case 11:
        console.log ("In chinese zodiac you are a Pig")
        break;
    default :
        console.log ("Not a valid input")
        break;
}