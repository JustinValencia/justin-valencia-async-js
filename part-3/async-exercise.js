console.log("Program Started")

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: "Hello, friend", error: null });
    }, 5000)
});

console.log(myPromise)
console.log("Program in progress...")

myPromise.then((val) => {
    console.log(val);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("First promise chain complete");
        }, 2000);
    });
})
//this is just to check to make sure that our first promise is printing correctly after 5 seconds
//we're creating a promise chain to practice seeing how things look while they're pending and to see
//how we can make one request start the process for another.
//this is all done in a code along by the way and i'll be posting the link credits in my readme file
.then((val) => {
    console.log(val)
})