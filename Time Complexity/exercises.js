function FirstElement(a) {
    return a[0];
}
FirstElement([1,2,3,4])//Time Complexity O(1)


//1.Linear Time Complexity
function printElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printElements([10,20,30,40]) //Time Complexity O(n)

//2.Quadratic Time Complexity - O(n^2)
function printAllPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}//Time Complexity O(n^2)


//3.Logarithmic Time Complexity - O(log n)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
} //Time Complexity O(log n)


//4.Exponential Time Complexity - O(2^n)

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// The Fibonacci function calls itself twice for every call (n-1 and n-2), leading to exponential growth in the number of operations as n increases.
// Exponential time complexity means that the time required doubles with each increase in the input size.
// Time Complexity: O(2^n)