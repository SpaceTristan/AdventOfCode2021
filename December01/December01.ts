var fs = require("fs");
var text = fs.readFileSync("./data.txt").toString("utf-8");
let depthMeasure: number[] = text.split("\n");

let x: number = depthMeasure[0];

var changeAssess: [number, string][] = [];
let numOfIncreases: number = 1;

for (var depth of depthMeasure) {
  let evaluation: string;
  if (changeAssess.length > 0) {
    let priorVal: number = changeAssess[changeAssess.length - 1][0];
    if (depth > priorVal) {
      evaluation = "Increase";
      numOfIncreases++;
    } else if (depth == priorVal) {
      evaluation = "No Change";
    } else if (depth < priorVal) {
      evaluation = "Decrease";
    }
    //eval = changeAssess[changeAssess.length-1][1];
  } else {
    evaluation = "Initial";
  }

  changeAssess.push([depth, evaluation]);
}

console.log(changeAssess);
console.log(numOfIncreases);

var windowDifference: [number, string][] = [];
let numOfWindowIncreases: number = 0;

//Part 2 a rolling window
let rollingWindowPrior: number = 0;
for (let i = 0; i < depthMeasure.length - 2; i++) {
  let evaluation: string;
  let rollingWindow: number =
    +depthMeasure[i] + +depthMeasure[i + 1] + +depthMeasure[i + 2];

  if (rollingWindowPrior !== 0) {
    if (rollingWindow > rollingWindowPrior) {
      evaluation = "Increase";
      numOfWindowIncreases++;
    } else if (rollingWindow == rollingWindowPrior) {
      evaluation = "No Change";
    } else if (rollingWindow < rollingWindowPrior) {
      evaluation = "Decrease";
    }
  } else {
    evaluation = "Initial"
  }
  rollingWindowPrior = rollingWindow;
  windowDifference.push([rollingWindow, evaluation]);
}

console.log(windowDifference);
console.log(numOfWindowIncreases);
