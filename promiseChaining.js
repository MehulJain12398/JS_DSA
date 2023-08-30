// let p = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(5)
//     }, 3*1000);
// })

// p.then(res => {
//     console.log(res)
//     return 1

// }).then(res => console.log(res * 2))


// for(let i=0; i<5; i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// }

// void function () {
//     console.log("FOO!");
//   }();

// question 1
// console.log("start")
// let promise1 = new Promise((resolve,reject) => {
//     console.log(1)
//     resolve(2)
//     console.log(3)
// })
// promise1.then((res) => console.log(res)).catch((err) => console.log('error:',err))
// console.log("end")

//question 2
// console.log("start")
// const func = () => 
//     new Promise((resolve,reject) => {
//         console.log(1)
//         resolve(5)
//     });

// console.log("middle")

// func().then((res) => console.log(res))
// console.log("end")


// question 3
// let job = () => {
//     return new Promise((resolve,reject) => {
//         reject()
//     })
// }

// const promise = job()

// promise
// .then(() => console.log("console 1"))
// .then(() => console.log("console 2"))
// .catch(() => console.log("error 1"))
// .then(() => console.log("finally called"))

// question 4

// let job = (state) => {
//     return new Promise((resolve,reject) => {
//         if(state){
//             resolve("success")
//         }else{
//             reject("error")
//         }
//     })
// }


// const promise = job(true)

// promise
// .then((res) => {
//     console.log(res) //success
//     return job(true)
// })
// .then((res) => {
//     if(res !== "victory"){
//         throw "defeat"
//     }
//     return job(true)
// })
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err) // defeat
//     return job(false)
// })
// .then((res) => {
//     console.log(res)
//     return job(true)
// })
// .catch((err) => {
//     console.log(err) // error
//     return "Error Caught"
// })
// .then((res) => {
//     console.log(res)  // Error Caught
//     return new Error("test")
// })
// .then((res) => {
//     console.log("success:" , res.message) // success:test
// })
// .catch((err) => {
//     console.log("Error:", err.message)
// })


// question 5

// create a first promise where it returns its resolve value with the help of second promise

// const promise1 = new Promise((resolve,reject) => {
//     resolve("success")
// })


// const promise2 = new Promise((resolve,reject) => {
//     resolve(promise1)
// })

// promise2
// .then(res => res)
// .then((res) => console.log(res))


// let p1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject("error")
//     }, 2000);
// })

function one(){
const p1 = Promise.resolve(6)
    return p1
}
async function test(){
    try {
        const resp = await one()
        console.log(resp)
    } catch (error) {
        console.log(error + "iui")
    }
}

test()



//polyfill for promise