// function isPalindrome(word) {
//   // Write your algorithm here
//   const reverseWord = reverseString(word);
//   if( word === reverseWord) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }


// function reverseString(word) {
//   return word.split(' ').reverse().join(' ');
// }

function isPalindrome(word) {
  // Write your algorithm here
  const words = word.length
  for (let i = 0; i < words /2; i ++ ){
    if(word[i] !== word[words -1 -i]){
      return false;
    }
  }
  return true;
}
console.log("abba");



/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  Strict equlity operator is being used to return the reversed word thus solving the problem.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
