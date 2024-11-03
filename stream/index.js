const fs = require("fs");
const { resolve } = require("path");

//membuat readable stream
const readableStream = fs.createReadStream(resolve(__dirname, "./input.txt"), {
  highWaterMark: 15,
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    console.log("gagal membaca berkas");
  }
});

readableStream.on("end", () => {
  console.log("Done");
});


//membuat writeable stream
const writeableStream = fs.createWriteStream(
  resolve(__dirname, "./output.txt")
);

writeableStream.write(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n"
);
writeableStream.write(
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n"
);
writeableStream.write(
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n"
);
writeableStream.end(
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n"
);
