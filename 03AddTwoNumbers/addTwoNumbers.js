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
    if (n && i <= n) {
      answer += `${
        parseFloat(item.split(" ")[0]) + parseFloat(item.split(" ")[1])
      }\n`;
    }
    if (!n) n = item;
  });
};
