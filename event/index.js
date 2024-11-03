const { EventEmitter } = require("events");


const birthdayEventListener = (name) => {
  console.log(`Happy Birthday ${name}!`);
};

const myEmitter = new EventEmitter();

myEmitter.on("birthday", birthdayEventListener);
myEmitter.emit("birthday", "Dimas");
