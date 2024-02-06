const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});

//the idea here is that when the first button is pressed a task is started, and it logs a response once it has finished
//Our event handler gets called once it's done, and the main difference is that this event handler is being called when the state of an
//object changes instead of when a user commits an action
//


 //call function for ufo. This is implementation I would add with more time. We'll leave it here for now :)
                    // var d = Math.random();
                    // if (d < 0.9) {
                    //     console.log("no ufo");
                    // } else {
                    //     console.log("a ufo is spawning!");
                    // }

//above is a piece of code that I was working on implementing in my space invaders game for module 2
//the game would roll a number, and one in every ten collisions with a spaceship would cause a new type of enemy to spawn
//This would also be considered an asynchronous occurence I think.