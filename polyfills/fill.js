Array.prototype.myFill = function(num,index=0,last=this.length){
    for(let i = index; i<last ; i++){
        this[i] = num
    }
    return this
}


console.log([1,2,3,4,5,6].myFill(9))