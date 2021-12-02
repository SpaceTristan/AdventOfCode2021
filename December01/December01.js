var fs = require("fs");
var text = fs.readFileSync("./data.txt").toString("utf-8");
var depthMeasure = text.split("\n");
var x = depthMeasure[0];
var changeAssess = [];
var numOfIncreases = 1;
for (var _i = 0, depthMeasure_1 = depthMeasure; _i < depthMeasure_1.length; _i++) {
    var depth = depthMeasure_1[_i];
    var evaluation = void 0;
    if (changeAssess.length > 0) {
        var priorVal = changeAssess[changeAssess.length - 1][0];
        if (depth > priorVal) {
            evaluation = "Increase";
            numOfIncreases++;
        }
        else if (depth == priorVal) {
            evaluation = "No Change";
        }
        else if (depth < priorVal) {
            evaluation = "Decrease";
        }
        //eval = changeAssess[changeAssess.length-1][1];
    }
    else {
        evaluation = "Initial";
    }
    changeAssess.push([depth, evaluation]);
}
console.log(changeAssess);
console.log(numOfIncreases);
var windowDifference = [];
var numOfWindowIncreases = 0;
//Part 2 a rolling window
var rollingWindowPrior = 0;
for (var i = 0; i < depthMeasure.length - 2; i++) {
    var evaluation = void 0;
    var rollingWindow = +depthMeasure[i] + +depthMeasure[i + 1] + +depthMeasure[i + 2];
    if (rollingWindowPrior !== 0) {
        if (rollingWindow > rollingWindowPrior) {
            evaluation = "Increase";
            numOfWindowIncreases++;
        }
        else if (rollingWindow == rollingWindowPrior) {
            evaluation = "No Change";
        }
        else if (rollingWindow < rollingWindowPrior) {
            evaluation = "Decrease";
        }
    }
    else {
        evaluation = "Initial";
    }
    rollingWindowPrior = rollingWindow;
    windowDifference.push([rollingWindow, evaluation]);
}
console.log(windowDifference);
console.log(numOfWindowIncreases);
