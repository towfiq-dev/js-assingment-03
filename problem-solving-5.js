function analyzeText(str) {
  const isNotString = typeof str !== "string";
  if (isNotString === true) {
    return "Invalid";
  }

  const trimmedString = str.trim();
  const isEmpty = trimmedString.length === 0;
  if (isEmpty === true) {
    return "Invalid";
  }

  const wordsArrayForToken = str.split(" ");
  const combinedString = wordsArrayForToken.join("");
  const characterCount = combinedString.length;

  const allWords = str.split(" ");
  let biggestWord = allWords[0];

  for (const currentWord of allWords) {
    const currentWordLength = currentWord.length;
    const biggestWordLength = biggestWord.length;

    if (currentWordLength > biggestWordLength) {
      biggestWord = currentWord;
    }
  }

  const finalResult = {
    longwords: biggestWord,
    token: characterCount
  };

  return finalResult;
}
console.log(analyzeText("I am a little honest person"));
console.log(analyzeText("Hello world"));   
console.log(analyzeText("Keep coding keep shining"));   
console.log(analyzeText(12345));
console.log(analyzeText("Programming is fun"));
console.log(analyzeText("A quick brown fox"));
console.log(analyzeText(""));