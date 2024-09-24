let st = [];
s.push(10);  
s.push(20);
console.log(s.pop());

// Example 2: Peek (View Top of Stack)
let stack = [5, 10, 15];
console.log(stack[stack.length - 1]);  // Output: 15 (top element)

// Example 3: Reverse a String Using Stack
let str = 'hello';
let s = str.split('');  // Convert string to array (stack-like)
let reversedStr = s.reverse().join('');
console.log(reversedStr);  // Output: 'olleh'

// Example 4: Stack for Balanced Parentheses
function isBalanced(expr) {
    let stack = [];
    for (let char of expr) {
        if (char === '(') {
            stack.push('(');
        } else if (char === ')' && stack.length > 0) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}
console.log(isBalanced('(())'));  // Output: true

// Example 5: Undo Operation with Stack
let actions = [];
function performAction(action) {
    actions.push(action);
    console.log(`Performed: ${action}`);
}
function undo() {
    let lastAction = actions.pop();
    console.log(`Undone: ${lastAction}`);
}
performAction('First Action');
performAction('Second Action');
undo();  // Output: 'Undone: Second Action'