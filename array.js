// built in array primitive
Array.prototype.sum = function() {
    let total = 0
    // happens on the instance of the array
    for(let i = 0; i < this.length; i++){
    total += this[i]
    }
    // alterernatively use a for in loop
    // for(const number in this){
    //   total += number
    // }
    // for each method -- have access to this's class methods
    // this.forEach(element => {
    //   total += element
    // })
    return total
}