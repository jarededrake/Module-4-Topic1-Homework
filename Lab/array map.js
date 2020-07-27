function main(array, reducer) {
   return array.map(reducer)
}

let nums = [1,2,3,4,5]; 
console.log(main(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ] 
