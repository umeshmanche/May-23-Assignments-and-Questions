function filteringArray(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;

    for(let i=0; i<len1; i++) {
         for(let j=0; j<len2; j++) {
            let index  = arr1.indexOf(arr2[j]);
            if(index >= 0) {
                arr1.splice(index, 1);
            }
        }
    }

    return arr1;
}

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [2, 4, 6, 8];

console.log(filteringArray(arr1, arr2));
