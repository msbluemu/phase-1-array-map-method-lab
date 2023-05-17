const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = tutorials.map((tutorial) => {
   return tutorial.charAt(0).toUpperCase() + tutorial.substring(1);
  })
 

function firstTitledCased (){
 return tutorials[0].charAt(0).toUpperCase() + tutorials[0].substring(1);
} 


console.log(titleCased);
console.log(firstTitledCased());