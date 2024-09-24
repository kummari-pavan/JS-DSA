// Example 1: Enqueue and Dequeue

let q= [];
q.push(1);  // Enqueue
q.push(2);
console.log(q.shift());  // Dequeue first element (1), Output: 1

// Example 2: Print Queue Simulation

let printQueue = [];
printQueue.push('Document1');
printQueue.push('Document2');
console.log(`Printing: ${printQueue.shift()}`);  // Output: Printing: Document1

// Example 3: Circular Queue

let queue = [1, 2, 3];
queue.push(queue.shift());  // Move first to last (rotate)
console.log(queue);  // Output: [2, 3, 1]

// Example 4: Queue for Scheduling Tasks
let tasks = [];
tasks.push('Task 1');
tasks.push('Task 2');
while (tasks.length > 0) {
    console.log(`Processing: ${tasks.shift()}`);  // Process and remove
}

