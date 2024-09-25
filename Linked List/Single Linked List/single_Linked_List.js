class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Print the linked list
    printLinkedList() {
        let curr = this.head;
        while (curr !== null) {
            process.stdout.write(curr.data + " ");
            curr = curr.next;
        }
        console.log(' ');
    }

    // Add element at the end
    add(e) {
        const temp = new Node(e);
        if (this.head === null) {
            this.head = temp;
        } else {
            let curr = this.head;
            while (curr.next !== null) {
                curr = curr.next;
            }
            curr.next = temp;
        }
    }

    // Add element at the beginning
    add_first(e) {
        const temp = new Node(e);
        if (this.head === null) {
            this.head = temp;
        } else {
            temp.next = this.head;
            this.head = temp;
        }
    }

    // Add element at a specific index
    add_index_element(index, element) {
        try {
            if (index === 0) {
                this.add_first(element);
            } else {
                const temp = new Node(element);
                let count = 0;
                let curr = this.head;
                while (count < index - 1) {
                    curr = curr.next;
                    count++;
                }
                temp.next = curr.next;
                curr.next = temp;
            }
        } catch (error) {
            throw new Error('Index ' + index + ' does not exist');
        }
    }

    // Add all elements from an array
    add_all(elements) {
        elements.forEach(element => this.add(element));
    }

    // Remove the first element
    remove_firstElement() {
        if (this.head === null) {
            console.log("No Elements in List");
        } else {
            const curr = this.head;
            this.head = this.head.next;
            curr.next = null;
        }
    }

    // Remove the last element
    remove_lastElement() {
        if (this.head === null) {
            console.log("No Elements In List");
        } else if (this.head.next === null) {
            this.head = null;
        } else {
            let curr = this.head;
            while (curr.next.next !== null) {
                curr = curr.next;
            }
            curr.next = null;
        }
    }

    // Get the index of an element
    indexOf(ele) {
        let curr = this.head;
        let count = 0;
        while (curr !== null) {
            if (curr.data === ele) {
                return count;
            }
            count++;
            curr = curr.next;
        }
        return -1;
    }

    // Get the last index of an element
    lastIndexOf(ele) {
        let curr = this.head;
        let count = 0;
        let index = -1;
        while (curr !== null) {
            if (curr.data === ele) {
                index = count;
            }
            count++;
            curr = curr.next;
        }
        return index;
    }
}

// Example usage
const main = () => {
    const ll = new LinkedList();
    ll.add(10);
    ll.add(30);
    ll.add(30);
    ll.add(40);
    
    // Uncomment to test more methods
    // ll.add_first(5);
    // ll.add_index_element(5, 50);

    // const elements = [1, 2, 3, 4, 5, 6];
    // ll.add_all(elements);
    // ll.remove_firstElement();
    // ll.remove_lastElement();
    
    ll.printLinkedList();
    console.log(ll.indexOf(30));  // Output: 1
    console.log(ll.lastIndexOf(30));  // Output: 2
}

main();
