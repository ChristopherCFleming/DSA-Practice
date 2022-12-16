// Count the number of duplicates in this list. Example:
// ['dog', 'cat', 'dog', 'bird', 'cat', 'elephant', 'cat']
// Output: 3
// explanation: There is 1 duplicate of dog, and 2 duplicates of cat. This means there are a total of 1 + 2 duplicates, or 3.


const numberOfDuplicates = (arr) => {
    let set = new Set();
    let duplicateCounter = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            duplicateCounter += 1;
        } else {
            set.add(arr[i]);
        }
    }
    
    return duplicateCounter;
}

numberOfDuplicates(['dog', 'cat', 'dog', 'bird', 'cat', 'elephant', 'cat']);