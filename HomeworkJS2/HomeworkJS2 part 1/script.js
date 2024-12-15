function tellStory(name, mood, activity){
    return `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
}

let story = ["Sinisa", "happy", "gaming"];
let anotherStory = ["Nina", "excited", "hiking"];
console.log(tellStory(...story));
console.log(tellStory(...anotherStory));