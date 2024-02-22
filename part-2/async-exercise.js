console.log("Program started")

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000);
});

myPromise.then(() => {
    console.log("Program Complete")
})

//In a very basic way, it's showing that i can create a promise to say program complete once it resolves and then 
//after 3000 milliseconds it will tell me the process has been completed
//resolve is ran if successful, reject is ran if it fails