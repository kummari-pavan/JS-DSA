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

//------------------------------------------------------------------------------
class Queue{
    constructor(){
        this.items=[];
        this.temp_Queue=[];
    }  
    push_ele(data){
        this.items.push(data);
    }
    
    pop_ele(){
        
        if(this.isEmpty()){
            console.log("Stack Is Empty");
        }
        else{
            let rmd_ele=this.items.shift();
            this.temp_Queue.push(rmd_ele);
        }
        
    }
    
    isEmpty(){
        
           return this.items.length===0;
           
    }
    
    peek(){
        if(this.isEmpty()){
           console.log("Queue Is Empty");
        }
        else{
            console.log(this.items[this.items.length-1]);
        }
    }
    
    display(){
        console.log("Queue items:" ,this.items.join(","))
        console.log("temp_Queue items:" ,this.temp_Queue.join(","))
    }
   }
   
   let s=new Queue();
   s.push_ele(10);
   s.push_ele(20);
   s.push_ele(130);
   s.push_ele(150);
   
   s.pop_ele();
   s.peek()
   s.display();