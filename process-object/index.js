const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i = 0; i <= 10000; i++) {}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode Environment: ${environment}`);
console.log(
  `Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`
);

/**
 * node ./process-object/index.js vik tor
 *
 * output
 * Hai, vik
 * Mode Environment: development
 * Penggunaan memori dari 3920000 naik ke 3921752
 */
