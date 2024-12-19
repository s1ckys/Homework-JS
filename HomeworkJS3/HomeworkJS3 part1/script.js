let object = {
    name: prompt("Please enter the lifeform's name"),
    kind: prompt("Please enter the lifeform's kind"),
    speak: function (speak){
        console.log(`${this.name} the ${this.kind} says: "${speak}"`);
    }
}

let speak = prompt("What would you like the lifeform's to say ?");
object.speak(speak);