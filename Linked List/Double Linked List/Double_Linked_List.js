class Node {
    
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add element at the end
    add(e) {
        const temp = new Node(e);
        if (this.head === null) {
            this.head = temp;
            this.tail = temp;
        } else {
            this.tail.next = temp;
            temp.prev = this.tail;
            this.tail = temp;
        }
    }

    // Print the doubly linked list
    printDoublyLinkedList() {
        let curr = this.head;
        while (curr !== null) {
            process.stdout.write(curr.data + " ");
            curr = curr.next;
        }
        console.log(' ');
    }

    // Print the list in reverse
    printReverse() {
        let curr = this.tail;
        while (curr !== null) {
            process.stdout.write(curr.data + " ");
            curr = curr.prev;
        }
        console.log(' ');
    }

    // Add element at the beginning
    addFirst(e) {
        const temp = new Node(e);
        if (this.head === null) {
            this.head = temp;
            this.tail = temp;
        } else {
            temp.next = this.head;
            this.head.prev = temp;
            this.head = temp;
        }
    }

    // Add element at a specific index
    addElementAtIndex(index, e) {
        const temp = new Node(e);
        let curr = this.head;
        let count = 0;
        while (count < index - 1) {
            curr = curr.next;
            count++;
        }
        curr.next.prev = temp;
        temp.next = curr.next;
        curr.next = temp;
        temp.prev = curr;
    }

    // Add all elements from an array
    addAllElements(elements) {
        elements.forEach(ele => this.add(ele));
    }

    // Remove the first element
    removeFirst() {
        if (this.head === null) {
            return;
        } else if (this.head.next === null) {
            this.head = null;
            this.tail = null;
        } else {
            const curr = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            curr.next = null;
        }
    }

    // Remove the last element
    removeLast() {
        if (this.head === null) {
            return;
        } else if (this.head.next === null) {
            this.head = null;
            this.tail = null;
        } else {
            const curr = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            curr.prev = null;
        }
    }
}

// Example usage
const main = () => {
    const dll = new DoublyLinkedList();

    dll.add(10);
    dll.add(20);
    dll.add(30);
    dll.add(40);

    const elements = [1, 2, 3, 4];

    // Uncomment to test more methods
    // dll.addFirst(5);
    // dll.addElementAtIndex(3, 35);
    // dll.addAllElements(elements);
    dll.removeFirst();
    dll.removeLast();

    dll.printDoublyLinkedList();
    // dll.printReverse();
}

main();
