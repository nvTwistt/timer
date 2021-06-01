const args = process.argv;
let splitList = args.slice(2);
for (let ticks of splitList) {
  let current = ticks + '000';
  let currNum = Number(current);
  if (currNum >= 0 && currNum !== NaN) {
    setTimeout(() => {
      process.stdout.write('.\n');
    }, currNum);
  }
}