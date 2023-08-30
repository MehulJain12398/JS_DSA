Array.prototype.myAt = function(num){
    if(num !==Number) return "Error: function accepts number"

    if(num < 0 && num*-1 < this.length){
        num = this.length + num
    }else if(num > 0 && num > this.length){
        num = num % this.length
    }else if(num < 0 && num*-1 > this.length){
        num = num*-1 % this.length
    }
    
    for(let i = 0; i<this.length; i++){
        if(num === i){
            return this[i]
        }
    }
   
}

const check = [12,23,34,45,56,67]

console.log(check.myAt(false))