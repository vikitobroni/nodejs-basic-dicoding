const { EventEmitter } = require("events");
const myEventEmitter = new EventEmitter();

//fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah berhasil dibuat`);
};

const makeBill = ({ price }) => {
  console.log(`Bill telah berhasil dibuat dengan harga Rp${price}`);
};

const onCoffeeOrderedListener = ({ name, price }) => {
  makeCoffee({ name });
  makeBill({ price });
};

//mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on("coffee-order", onCoffeeOrderedListener);

//membangkitkan event coffee-order dengan emit
myEventEmitter.emit("coffee-order", { name: "Luwak", price: 15000 });

/**
 * Nov 3rd 24
 * Kopi Luwak telah berhasil dibuat
 * Bill telah berhasil dibuat dengan harga Rp15000
 */
