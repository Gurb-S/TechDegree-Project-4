/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
 * an array of objects that stores a quote and different aspects about the quote such as 
 * source, citation, year, and tags that apply to the quote
***/
const quotes = [
  {
    quote: "It is not how much money we make that ultimately makes us happy between nine and five. It's whether our work fulfills us.",
    source: "Malcolm Gladwell",
    citation: "Outliers",
    year: 2008,
    tags: ["business","life","book"]
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    source: "Mae West",
    tags: ["humor","life"]
  },
  {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    source: "J.K. Rowling",
    citation: "Harry Potter and the Goblet of Fire",
    tags: ["book","life","humanity"]
  },
  {
    quote: "Without music, life would be a mistake.",
    source: "Friedrich Nietzsche",
    citation: "Twilight of the Idols",
    tags: ["music","books","inspiration"]
  },
  {
    quote: "You are the shuckiest shuck faced shuck in the world!",
    source: "James Dashner",
    citation: "The Maze Runner",
    tags: ["humor","book","movie"]
  }
];


/***
 * `getRandomQuote` function
 * takes an array as a arguement and uses the random number formula to get a random number from 0-4 and
 * uses that number to get the object with that index value in the quotes array whihc then gets stored in variable qt and returned
 * 
 * @param {array} arr - the array quotes[]
 * @returns {number} qt - a random object for the array passed into the function
***/
function getRandomQuote(arr){
  const randomNumber = Math.floor(Math.random() * arr.length);
  let qt = arr[randomNumber];
  return qt;
}

/***
 *  `rgb` function
 * creates a formula for a random number and mulitplies by 256 to get a random value between 0-255
 * which is the range for rgb values
 * 
 * @returns {number} A random rgb value from 0-255
 * 
***/
function rgb(){  //taken from workspaces 
  return Math.floor(Math.random() * 256);
}

/***
 *  `randomRGB` function
 * takes in a function rgb(); as an arguement and runs it 3 times to get 3 different rgb values from it and returns it
 * with additional text to be used as a rgb value for a color 
 * 
 * @param {function} value - Random rgb value from rgb();
 * @returns {templete literal} the word "rgb" with 3 random rgb values separated by a comma incompassed with ()
 * 
***/
function randomRGB(value){ //taken from workspaces
  return `rgb(${value()}, ${value()}, ${value()})`; 
}

/**
 *`backColor` function
 * arrow function that calls function randomRGB(); and passes function rgb(); as an arguement 
 * and then stores that as the value for the css property background-color(so cool that it does that all on 1 line)
 * @returns {css property style}
***/
const backColor = () => document.body.style.backgroundColor = randomRGB(rgb);
/**
 * Platform: Youtube
 * URL: https://www.youtube.com/watch?v=xnUrOjV6t6g
 * Title: Random Background Color On Click With JavaScript
 * Channel: Coding Artist
 * Code: "document.body.style.backgroundColor"
 * Usage: Needed to figure out how to select body background color without messing wiht any other elements
***/




/***
 * `printQuote` function
 * calls function getRandomQuote(); and passes array quotes[] as an arguement and stores in variable rando
 * then it stores the value of the key quote and key source for object the object stored in rando
 * and if that object also has a value for key citation and key year it stores that in the template literal print as well
 * then it closes off the print template literal with closing of the </p> then add the values for the key tags which should be in an array
 * then calls the backColor(); function and then displays the value of print in the html
 * 
 * @returns {template literal} - value of print
***/
function printQuote(){
  let rando = getRandomQuote(quotes);
  let print = `
    <p class="quote">${rando.quote}</p>
    <p class="source">${rando.source}
  `;
  if(rando.citation){
    print+=`<span class="citation">${rando.citation}</span>`;
  }
  if(rando.year){
    print+=`<span class="year">${rando.year}</span>`;
  }
  print += `</p> <p class="source">tags: ${rando.tags.join(", ")}</p>`;
  
  backColor();

  document.getElementById('quote-box').innerHTML = `${print}`;
  
  return print;
}

/***
 *  `setInterval`
 * takes in a function (in this case printQuote();) as a reference(whatever the heck that means) and then 
 * takes in a value for time in milliseconds and runs the specified function in intervals of the milliseconds added
***/
setInterval(printQuote,10000);
/**
 * Platform: Youtube
 * URL: https://www.youtube.com/watch?v=GhePFBkdNYk
 * Title: The javaScript method setInterval EXPLAINED in 5 minutes!
 * Channel: Code with Ania Kubow
 * Code: "setInterval(function,time)"
 * Usage: Needed to figure out how to make a function run in intervals of a specified amount of time
***/


// 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
/***
 * not sure what this does but from what I can figure out it targets the id "load-quote" which is used for the button then
 * it waits for a "click" and runs the function printQuote(); not sure what the false is for  
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);