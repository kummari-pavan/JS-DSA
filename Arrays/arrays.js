let Top_comp = ['apple', 'google', 'Microsoft'];
Top_comp.push('Microsoft');  // Adds 'Microsoft' at the end
console.log(Top_comp);

//Example 1: Add Elements

let a = [1, 2, 3];
a.push(4);  // Adds 4 to the end
console.log(a);  // Output: [1, 2, 3, 4]

//Example 2: Remove Elements

let x = [1, 2, 3];
x.pop();  // Removes the last element (3)
console.log(x);  // Output: [1, 2]

//Example 3: Iterating Over an Array

let y = [10, 20, 30];
y.forEach((item) => {
    console.log(item);  // Outputs each item
});

//Example 4: Finding an Element

let l = [5, 10, 15, 20];
let index = l.indexOf(15);  // Find index of 15
console.log(index);  // Output: 2

//Example 5: Sorting an Array

let arr = [30, 10, 20];
arr.sort();  // Sorts the array
console.log(arr);  // Output: [10, 20, 30]



// *************Disadvantages*************
//Example 1: Inserting at the start causes re-indexing.

let a1 = [1, 2, 3];
a1.unshift(0);  // Adds 0 at the start, shifts other elements
console.log(a1);  // Output: [0, 1, 2, 3]

//Example 2: Memory consumption with sparse arrays.

let a2 = [];
a2[1000] = 'end';  // Sparse array
console.log(a2.length);  // Output: 1001 (array still occupies memory for 1001 slots)

// Example 3: Homogeneous assumption in some languages (not JS).

let a3 = ['string', 10, true];  // JavaScript allows different types, but this would cause issues in static languages.

//Example 4: Searching requires a full scan (unsorted array).


let a4 = [10, 5, 20, 15];
let found = a4.indexOf(20);  // Requires scanning the array
console.log(found);  // Output: 2

//Example 5: Arrays can't map key-value pairs.

let a5 = ['apple', 'google', 'Microsoft'];  // Can't associate 'apple' with a specific value like objects do.
