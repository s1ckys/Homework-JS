function Book(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;

    this.getReadingStatus = function () {
        if (this.readingStatus) {
            return `Already read '${this.title}' by ${this.author}.`;
        } else {
            return `You still need to read '${this.title}' by ${this.author}.`;
        }
    };
}

let title = prompt("Enter the book title:");
let author = prompt("Enter the author of the book:");

let readingStatusInput;
do {
    readingStatusInput = prompt("Have you read this book? (yes/no):").toLowerCase();
} while (readingStatusInput !== "yes" && readingStatusInput !== "no");

let readingStatus = readingStatusInput === "yes";

let myBook = new Book(title, author, readingStatus);

console.log(myBook.getReadingStatus());