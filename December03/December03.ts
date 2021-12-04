//PART 1
import * as fs from "fs";

// Get data from source
var text = fs.readFileSync("./data.txt").toString("utf-8");
var binaryList = text.split("\n");

let pair: [number, string][] = [];
// console.log(binaryList)
let len: number;
for (var bin of binaryList) {
  bin = bin.replace(/\s+/g, " ").trim();
  // console.log(bin);
  len = bin.length;
  for (var i = 0; i < len; i++) {
    pair.push([i, bin[i]]);
  }
}

let countBin = [];
for (var i = 0; i < len; i++) {
  let zeros: number = 0;
  let ones: number = 0;
  for (const [x, y] of pair) {
    if (x == i) {
      if (y == "0") {
        zeros += 1;
      } else if (y == "1") {
        ones += 1;
      }
    }
  }

  let newVal = {
    id: String(i),
    zeroVal: zeros,
    oneVal: ones,
  };

  countBin.push(newVal);
}

let gamma: [string] = [""];
let epsilon: [string] = [""];

for (var item of countBin) {
  // console.log(item);
  // console.log(item.zeroVal);
  if (item.zeroVal > item.oneVal) {
    gamma.push("0");
    epsilon.push("1");
  } else if (item.zeroVal < item.oneVal) {
    gamma.push("1");
    epsilon.push("0");
  }
}

let gammaVal: Number = parseInt(gamma.join(""), 2);
let epsilonVal: Number = parseInt(epsilon.join(""), 2);
//Power Consumption = Gamma * Epsilon
let powerConsumption: Number = +gammaVal * +epsilonVal;
console.log(countBin);
console.log(powerConsumption);

//PART 2
//For each row in the binary list parse item at location 1
//If item matches the gamma value it stays else it removes
//Parse over each element until only one value remains
let oxygenList = binaryList;
for (var i = 0; i < len; i++) {
  let gammaNum = gamma[i];
  for (var bin of oxygenList) {
    if (oxygenList.length > 1) {
      if (bin[i] != gammaNum) {
        oxygenList = oxygenList.filter((item) => item !== bin);
      }
    }
  }
}

let oxygenBinary: string = oxygenList[0].replace(/\s+/g, " ").trim();
console.log(oxygenList[0]);
console.log(parseInt(oxygenBinary, 2));
console.log(parseInt("001101011110", 2));

let co2List = binaryList;
for (var i = 0; i < len; i++) {
  if (co2List.length > 1) {
    let epsilonNum = epsilon[i];
    for (var bin of co2List) {
      if (String(bin[i]) !== String(epsilonNum)) {
        co2List = co2List.splice(co2List.indexOf(bin), 1);
      }
    }
  }
}

let co2Binary: string = co2List[0].replace(/\s+/g, " ").trim();
console.log(co2List);
console.log(parseInt(co2Binary, 2));
