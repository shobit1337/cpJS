let readable = process.stdin;

let inputArr = "";
let n;
let answer = "";
readable.on("data", (chunk) => {
  inputArr += chunk;
});

readable.on("end", () => {
  main();
  console.log(answer);
});

const main = () => {
  let arr = inputArr.split("\n");
  arr.forEach((item, i) => {
    let temp = 0;
    if (n && i <= n) {
      item = item.split("");
      item.forEach((item) => {
        temp += parseInt(item);
      });
      answer += `${temp}\n`;
    }
    if (!n) n = item;
  });
};
