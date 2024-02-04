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

//! This almost works!
// function titleCased() {
//   return tutorials.map(newTutorials => newTutorials.charAt(0).toUpperCase() + newTutorials.substring(1).toLowerCase());
// }

function titleCased() {
  return tutorials.map(newTutorials => {
    // Split the string into an array of words
    const words = newTutorials.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.substring(1);
      return firstLetter + restOfWord;
    });
    //! const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
    // Join the words back into a string
    return capitalizedWords.join(' ');
  });
}


/*
function titleCased(tutorial) {
  const words = tutorial.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const titleCasedTutorial = capitalizedWords.join(' ');
  const titleCasedTutorials = tutorials.map(titleCased);

  return titleCasedTutorials;
};
*/
/*
const titleCased = tutorials.map(tutorial => {
  const words = tutorial.split(' ')

  const captializedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))

  const titleCasedTutorial = captializedWords.join(' ');
  return titleCasedTutorial;

})
*/


/*
const titleCased = tutorials.map(tutorialList, letter) => {
  return [
    `${letter + 1}. ${tutorials.}`
  ]
    
  /*

}
/*
const tutorialList = tutorials.map((listed, letter) => `${letter + 1}.${listed.toUpperCase()}`)

const toTitleCase = str => str.replace(/\w\S*g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
*/
//   })
//     )
//   return tutorials
// }
