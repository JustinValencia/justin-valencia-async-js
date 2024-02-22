//the point of me choosing this exercise was to get more experience working with
//two promises that are trying to add together their results or trying to merge data
//despite the fact that they will be progressing at different speeds.
//the process ends up taking the longer time of the two, which in this case is 5 seconds but it does show how to 
//take the values of the promise and add them together once both processes have finished on their respective ends.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 5000);
});

Promise.all([promise1, promise2]).then((values) => {
    const firstValue = values[0];
    const secondValue = values[1];
    console.log(firstValue, secondValue);
    console.log(firstValue + secondValue);
})