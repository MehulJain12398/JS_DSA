Array.prototype.myEvery = function(cb) {
    for(let i=0; i<this.length; i++){
        if(!cb(this[i],i,this)){
            return false
        }
    }
    return true
}

const check = [1,2,3,4,5,6,7,8]

console.log(check.myEvery((item) => item === 10))