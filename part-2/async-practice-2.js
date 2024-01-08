const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(fetchPromise);
  
  fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
  });
  
  console.log("Started request…");

  //when this happens, we are told that we have a Promise object and it has a value of pending

  const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
      console.log(data[0].name);
    });
  });

  //Json is a method that's asynchronous so here we're calling two async functions consecutively

  const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].name);
    });

    //this is a better version of the same code since it's not as nested making our new code less complicated and more neat

    //promises come in three states: pending, fulfilled, and rejected

    //pending: the promise has been created and the async function it's associated with has not succeeded or failed.
    //this is the state your promise is in when returned by fetch() and the request is still being made
    //fulfilled: the async function has succeeded. When a promise is fulfilled, the then() handler is called
    //rejected: the async function has failed and the catch() handler is called.

    const fetchPromise1 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      const fetchPromise2 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
      );
      const fetchPromise3 = fetch(
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
      );
      
      Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
        .then((responses) => {
          for (const response of responses) {
            console.log(`${response.url}: ${response.status}`);
          }
        })
        .catch((error) => {
          console.error(`Failed to fetch: ${error}`);
        });

        //this array only returns the promise when all requests have been finished.
        //the output for this one should be fine since all promises are fulfilled, but one will return error 404

        