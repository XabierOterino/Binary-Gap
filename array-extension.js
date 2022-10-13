/**
 * Suppose an array of numbers is given. Create 'toPalindrome()' method that creates a plaindrome out of your array in the following way:
 * toPalindrome([1,2,3]) => [1,2,3,2,1]
 */


const _arr = [2,55,6,3090,2]

// We create the method for the Array class itself
Array.prototype.toPalindrome = function(){
    //this.slice = swallow copy
    //reverse() => read backwards
    return  this.slice().concat(this.slice(0,this.length - 1).reverse())
}


console.log(_arr.toPalindrome())