"use strict";
exports.__esModule = true;
var fs = require("fs");
// Get data from source
var text = fs.readFileSync("./data.txt").toString("utf-8");
var binaryList = text.split("\n");
var pair = [];
// console.log(binaryList)
var len;
for (var _i = 0, binaryList_1 = binaryList; _i < binaryList_1.length; _i++) {
    var bin = binaryList_1[_i];
    bin = bin.replace(/\s+/g, " ").trim();
    // console.log(bin);
    len = bin.length;
    for (var i = 0; i < len; i++) {
        pair.push([i, bin[i]]);
    }
}
var countBin = [];
for (var i = 0; i < len; i++) {
    var zeros = 0;
    var ones = 0;
    for (var _a = 0, pair_1 = pair; _a < pair_1.length; _a++) {
        var _b = pair_1[_a], x = _b[0], y = _b[1];
        if (x == i) {
            if (y == "0") {
                zeros += 1;
            }
            else if (y == "1") {
                ones += 1;
            }
        }
    }
    var newVal = {
        id: String(i),
        zeroVal: zeros,
        oneVal: ones
    };
    countBin.push(newVal);
}
var gamma = [""];
var epsilon = [""];
for (var _c = 0, countBin_1 = countBin; _c < countBin_1.length; _c++) {
    var item = countBin_1[_c];
    // console.log(item);
    // console.log(item.zeroVal);
    if (item.zeroVal > item.oneVal) {
        gamma.push("0");
        epsilon.push("1");
    }
    else if (item.zeroVal < item.oneVal) {
        gamma.push("1");
        epsilon.push("0");
    }
}
var gammaVal = parseInt(gamma.join(""), 2);
var epsilonVal = parseInt(epsilon.join(""), 2);
//Power Consumption = Gamma * Epsilon
var powerConsumption = +gammaVal * +epsilonVal;
console.log(countBin);
console.log(powerConsumption);
//For each row in the binary list parse item at location 1
//If item matches the gamma value it stays else it removes
//Parse over each element until only one value remains
var oxygenList = binaryList;
for (var i = 0; i < len; i++) {
    var gammaNum = gamma[i];
    for (var _d = 0, oxygenList_1 = oxygenList; _d < oxygenList_1.length; _d++) {
        var bin = oxygenList_1[_d];
        if (oxygenList.length > 1) {
            if (bin[i] != gammaNum) {
                oxygenList = oxygenList.filter(function (item) { return item !== bin; });
            }
        }
    }
}
var oxygenBinary = oxygenList[0].replace(/\s+/g, " ").trim();
console.log(oxygenList[0]);
console.log(parseInt(oxygenBinary, 2));
console.log(parseInt("001101011110", 2));
var co2List = binaryList;
for (var i = 0; i < len; i++) {
    if (co2List.length > 1) {
        var epsilonNum = epsilon[i];
        for (var _e = 0, co2List_1 = co2List; _e < co2List_1.length; _e++) {
            var bin = co2List_1[_e];
            if (String(bin[i]) !== String(epsilonNum)) {
                co2List = co2List.splice(co2List.indexOf(bin), 1);
            }
        }
    }
}
var co2Binary = co2List[0].replace(/\s+/g, " ").trim();
console.log(co2List);
console.log(parseInt(co2Binary, 2));
