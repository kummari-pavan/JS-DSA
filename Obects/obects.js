let person = {
    name: 'Pavan',
    age: 20,
    job: 'Developer'
};
console.log(person.name);


// Example 1: Create and Access Object Properties

let user = { name: 'PAVAN', age: 25 };
console.log(user.name);  // Output: 'Alice'

// Example 2: Add New Properties

let u = { name: 'PAVAN' };
u.age = 25;  // Add new property
console.log(u);  // Output: { name: 'Alice', age: 25 }

// Example 3: Delete Properties

let car = { brand: 'Toyota', model: 'Corolla' };
delete car.model;  // Removes 'model' property
console.log(car);  // Output: { brand: 'Toyota' }

// Example 4: Looping through Object Properties

let book = { title: 'JS Basics', author: 'Pavan' };
for (let key in book) {
    console.log(key + ': ' + book[key]);  // Outputs both key and value
}
// Example 5: Check for a Property

let student = { name: 'Balu', grade: 'A' };
console.log('grade' in student);  // Checks if 'grade' exists, Output: true



// **************Disadvantages************

// Example 1: Higher memory consumption.

let obj1 = { name: 'Pavan', age: 20 };  // Takes more memory to store key-value pairs compared to array values.

// Example 2: No guaranteed order of keys.

let obj2 = { b: 2, a: 1 };
console.log(Object.keys(obj2));  // Output might not maintain the same order

// Example 3: Slower lookup compared to arrays.

let obj3 = { name: 'Pavan', age: 20 };
console.log(obj3.age);  // Slower compared to accessing by index in an array

// Example 4: Iterating over objects is more complex.

let obj4 = { a: 1, b: 2 };
for (let key in obj4) {
  console.log(key, obj4[key]);  // Requires special `for...in` loop
}

// Example 5: Fewer built-in methods compared to arrays.

let obj5 = { a: 1, b: 2 };
// No methods like `push()` or `pop()` for objects
