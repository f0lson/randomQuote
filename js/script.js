// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// calling the printQuote function on the window object every 30s
window.setInterval( printQuote, 30000);

// quotes array containing the quote objects
const quotes = [
    {
        quote : "Football is a game about feelings and intelligence.",
        source : 'José Mourinho',
        tags : 'Soccer'
    },
    {
        quote : "We're talking about practice! We ain't talking about the game!",
        source : 'Allen Iverson',
        tags : 'Basketball'
    },
    {
        quote : "My music isn't just music -- it's medicine.",
        source : 'Kanye West',
        tags : 'Music'
    },
    {
        quote : "The plans was, to drink until the pain over. But what's worse, the pain or the hangover?",
        source : 'Kanye West',
        citation : 'Dark Fantasy',
        year : 2010,
        tags : 'Music, Philosophy'
    },
    {
        quote : "Mayonnaise colored Benz, I push Miracle Whips.",
        source : 'Kanye West',
        citation : 'Last Call',
        year : 2004,
        tags : 'Music, Humor'

    },
    {
        quote : "I'm like the fly Malcolm X, buy any jeans necessary.",
        source : 'Kanye West',
        citation : 'Good Morning',
        year : 2007,
        tags : 'Music, Humor'
    },
    {
        quote : "The Hermes of verses – sophisticated ignorance write my curses in cursive!",
        source : 'Kanye West',
        citation : 'Otis',
        year : 2011,
        tags : 'Music, Humor'
    },
    {
        quote : "I had a dream I could buy my way to heaven, when I awoke, I spent that on a necklace.",
        source : 'Kanye West',
        citation : "Can't Tell Me Nothin",
        year : 2007,
        tags : 'Music, Humor'
    }
];

// function to retrieve random quote
function getRandomQuote() {
    // store the length of the quotes array
    let upper = quotes.length;
    // create a random number from 0 to the upper
    let randomNumber = Math.floor(Math.random() * upper);
    // randomly access an object at index based on the value of randomNumber
    let quote = quotes[randomNumber];
    // return a random quote object
    return quote;
};

// function which returns a random number between 0 and 239
// wanted to keep it at 239 so that the colors generated wouldn't be too bring and clash with the white copy
function randomRGB () {
    let colorValue = Math.floor(Math.random() * 240);
    return colorValue;
}

// function to generate a random RGB value
function generateRandomRGB() {
    let color = 'rgb(';
    color += randomRGB() + ',';
    color += randomRGB() + ',';
    color += randomRGB() + ')';
    return color;
}

// function to compile the quote markup
function buildQuote (quote) {
    let html = '<p class="quote">' + quote.quote + '</p>' ;
    html += '<p class="source">' + quote.source;
    // checking to see if randomQuote has a property with the name "citation"
    if ( quote.hasOwnProperty('citation') ) {
        // if yes, we add the citation & year spans to the string
        html += '<span class="citation">' + quote.citation + '</span>';
        html += '<span class="year">' + quote.year + '</span>';
    }
    html += '</p>';
    html += '<p class="tags">[Tags: <a>' +  quote.tags + '</a>]</p>';
    return html;
}

// print quote function which runs when the "Show another quote" btn is clicked, or if 30s has passed.
function printQuote() {
    // select and store body element
    const body = document.querySelector('body');
    // select and store quote-box div
    const quoteBox = document.querySelector('#quote-box');
    // generate a random quote from
    const randomQuote = getRandomQuote();
    // function to build a quote
    const html = buildQuote(randomQuote);
    // changing the body background-color to a randomly generated rgb color value
    body.style.backgroundColor = generateRandomRGB();
    // setting the innerHTML of the quote-box div to the new quote that was built and stored in the html variable
    quoteBox.innerHTML = html;
}
