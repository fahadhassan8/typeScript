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
var myPromise = new Promise(function (resolve, reject) {
    console.log('Promise Pending');
    setTimeout(function () {
        var data = ['Fahad', 'Adeel', 'Zohaib', 'Musadique'];
        if (data) {
            console.log("Promise resolved ".concat(data));
        }
        else {
            console.log('Promise rejected');
        }
    }, 1000);
});
myPromise
    .then(function (res) { return res; })
    .catch(function (err) { return console.log('ap ka data fetch nahi hoska'); });
