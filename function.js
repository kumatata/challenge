// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
  }
  
  // CHALLENGE 2: VALIDATE A PALINDROME
  // Return true if palindrome and false if not
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
  function isPalindrome(str) {
    return (reverseString(str) === str ? true : false ) ;
  }
  
  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  function reverseInt(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('') ))
  
  }
  
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
  function capitalizeLetters(str) {
    return ( str.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ') )
  }
  
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
  function maxCharacter(str) {

  }
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  function fizzBuzz() {
      for(let i=0;i<100;)console.log((++i % 3 ? '':'fizz')+(i % 5 ? '':'buzz') || i)
  
  }
  
  // Call Function
  const output = reverseString('hello');
  const output2 = isPalindrome('hello') ;
  const output3 = isPalindrome('racecar') ;
  const output4 = reverseInt(521) ; 
  const output5 = capitalizeLetters('i love javascript') ;

console.log(output)
console.log(output2)
console.log(output3)
console.log(output4) 
console.log(output5)
fizzBuzz();