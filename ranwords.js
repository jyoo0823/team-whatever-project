const quoteDisplayElement = document.querySelector('#quoteDisplay');
const quoteInputElement = document.querySelector('#quoteInput');
var curr_input = "";
var curr_quote = "";

const sentences = [
    "I am what I am, an' I'm not ashamed.",
    "Time will not slow down when something unpleasant lies ahead.",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "It does not do to dwell on dreams and forget to live",
];

RandomQuote();
console.log(curr_quote.length);
const characters = curr_quote.split("").map((charvals) => {
    const spanofcharacter = document.createElement('span');
    spanofcharacter.innerText = charvals;
    quoteDisplayElement.appendChild(spanofcharacter);
    return spanofcharacter;
});

var cursorindex = 0;
var correctchar = characters[0];

let current = true;
document.addEventListener("input", () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    const arrayValue = quoteInputElement.value.split('');

    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character === characterSpan.innerText) {
            //correctchar = characters[++cursorindex];
            current = true;
            console.log(current);
        } else {
            //correctchar = characters[++cursorindex];
            current = false;
            console.log(current);
        }
    })
    if (current) {
        renderNewQuote();
    }
});

function RandomQuote(){
    const randNum = Math.floor(Math.random() * sentences.length);
    quoteDisplayElement.innerHTML = sentences[randNum]; //sets and displays current sentence generated from the array
    curr_quote = quoteDisplayElement.innerHTML;
}

function renderNewQuote(){
    RandomQuote();
    quoteDisplayElement.innerHTML = "";
    console.log(quoteDisplayElement)
    // characters = curr_quote.split("").map((charvals) => {
    //     const spanofcharacter = document.createElement('span');
    //     spanofcharacter.innerText = charvals;
    //     quoteDisplayElement.appendChild(spanofcharacter);
    //     return spanofcharacter;
    // });
    curr_quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = "";
}