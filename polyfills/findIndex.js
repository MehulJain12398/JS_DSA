Array.prototype.myFindIndex = function (cb){
    for(let i = 0; i<this.length; i++){
    if(cb(this[i],i,this)){
        return i
    }
}
    return -1
}


const check = [{id:1,name:"mehul"},{id:2,name:"kevin"},{id:3,name:"kidd"}];

const val = check.myFindIndex((item) => item.name === "mehul")
console.log(val)