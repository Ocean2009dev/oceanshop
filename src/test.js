const x = "7,222,222đ";
const y = x.slice(0, x.length - 1).replaceAll(",", ".");
console.log(Number(y) - 2)
