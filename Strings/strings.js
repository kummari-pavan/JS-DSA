// Example 1: Concatenation
let firstName = 'Pavan';
let lastName = 'K';
let fullName = firstName + ' ' + lastName;
console.log(fullName);  // Output: 'Pavan K'

//Example 2: Finding Substring
let s = 'Hello world';
console.log(s.indexOf('world'));  // Output: 6 (index of 'world')

// Example 3: Uppercase and Lowercase
let word = 'javascript';
console.log(word.toUpperCase());  // Output: 'JAVASCRIPT'
console.log(word.toLowerCase());  // Output: 'javascript'

// Example 4: Splitting a String into an Array
let sentence = 'I love coding';
let words = sentence.split(' ');  // Split by space
console.log(words);  // Output: ['I', 'love', 'coding']

// Example 5: Replacing Part of a String
let message = 'I love cats';
let newMessage = message.replace('cats', 'dogs');
console.log(newMessage);  // Output: 'I love dogs'