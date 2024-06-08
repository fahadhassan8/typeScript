// Promise Object Properties
// A JavaScript Promise can be:

// Pending
// Fulfilled (resolve)
// Rejected

// The Promise object supports two properties: State and result

// While the Promise object is 'pending' (working), the result is undefined

// When a Promise object is 'fulfilled', the result is a value

// When a Promise object is 'rejected', the result is an error object.

// Syntax

// let promise = new Promise((resolve,reject) => {})
// .then((res)=>res)
// .catch((err)=err)

let myPromise = new Promise((resolve,reject) => {
    console.log('Promise Pending');
    setTimeout(() => {
        let data = ['Fahad','Adeel','Zohaib','Musadique'];
        if(data){
            console.log(`Promise resolved ${data}`)
        }
        else{
            console.log('Promise rejected')
        }
    }, 1000);
})
myPromise
.then((res)=>res)
.catch((err)=>console.log('ap ka data fetch nahi hoska'))