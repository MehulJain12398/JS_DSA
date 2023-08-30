Array.prototype.myFind = function (cb){
    for(let i = 0; i<this.length; i++){
    if(cb(this[i],i,this)){
        return this[i]
    }
}
    return undefined
}


const check = [{id:1,name:"mehul"},{id:2,name:"kevin"},{id:3,name:"kidd"}];

const val = check.myFind((item) => item.name === "kevin")
console.log(val)