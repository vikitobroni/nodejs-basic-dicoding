const fs = require("fs");
//menentukan path berkas
const { resolve } = require("path");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

//menentukan path berkas __dirname adalah path dari file index.js
fs.readFile(resolve(__dirname, "notes.txt"), "utf8", fileReadCallback);
