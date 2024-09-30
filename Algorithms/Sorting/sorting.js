function bubbleSort(a){
    let l = a.length;
    for(let i=0; i<l-1;i++){
        for(let j=0;j<l-i-1;j++){
            if(a[j]>a[j+1]){
                [a[j],a[j+1]]=[a[j+1],a[j]];
            }
        }
    }
    return a;
}
let res1=bubbleSort([2,4,1,3,7,5]);
console.log(res1)

function selectionSort(a){
    let l=a.length;
    for(let i=0;i<l;i++){
        let minStartIndex=i;
        for(let j=i+1;j<l;j++){
           if(a[j]<a[minStartIndex]){
               minStartIndex=j
           }
        }
        [a[minStartIndex],a[i]]=[a[i],a[minStartIndex]];
    }
    return a
}

let res2=selectionSort([2,4,1,3,7,5]);
console.log(res2)

//Insertion
function insertionSort(a){
    let l=a.length;
    for(let i=1;i<l;i++){
        let curr=a[i];
        let j=i-1;
        while(j>=0 && a[j]>curr){
            a[j+1]=a[j];
            j--;
        }
        a[j+1]=curr;
    }
    return a;
}
console.log(insertionSort([4,5,6,2,1]))