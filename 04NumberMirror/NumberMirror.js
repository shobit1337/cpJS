process.stdin.resume();
process.stdin.setEncoding("utf8");

let num = "";
process.stdin.on("data", (data) => {
  num += data;
});

process.stdin.on("end", () => {
  main(num);
});

const main = (number) => {
  console.log(num.split("\n")[0]);
};
