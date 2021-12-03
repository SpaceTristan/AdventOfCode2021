"use strict";
//PART 1
exports.__esModule = true;
//Read and process directions
var fs = require("fs");
var text = fs.readFileSync("./data.txt").toString("utf-8");
var directions = text.split("\n");
console.log(directions);
//Map direction 
//forward increases by x units
//down = -y vs up = +y
var up = [0];
var down = [0];
var forward = [0];
for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
    var direction = directions_1[_i];
    var splitVal = direction.split(" ", 2);
    if (splitVal[0] == 'up') {
        up.push(Number(splitVal[1]));
    }
    else if (splitVal[0] == 'down') {
        down.push(Number(splitVal[1]));
    }
    else if (splitVal[0] == 'forward') {
        forward.push(Number(splitVal[1]));
    }
}
var sumUp = up.reduce(function (a, b) { return a + b; }, 0);
var sumDown = down.reduce(function (a, b) { return a + b; }, 0);
var sumForward = forward.reduce(function (a, b) { return a + b; }, 0);
var finalResult = (+sumDown - +sumUp) * +sumForward;
console.log(finalResult);
//PART 2
var aim = 0;
var depth = [0];
var fwd = [0];
for (var _a = 0, directions_2 = directions; _a < directions_2.length; _a++) {
    var direction = directions_2[_a];
    var splitVal = direction.split(" ", 2);
    if (splitVal[0] == 'up') {
        //If up decrease aim by x amount
        aim = +aim - Number(splitVal[1]);
    }
    else if (splitVal[0] == 'down') {
        //If down increase aim by x amount
        aim = +aim + Number(splitVal[1]);
    }
    else if (splitVal[0] == 'forward') {
        //Move forward x and depth = x * 
        var fwdVal = Number(splitVal[1]);
        fwd.push(fwdVal);
        var depthVal = +fwdVal * +aim;
        depth.push(depthVal);
    }
}
var sumDepth = depth.reduce(function (a, b) { return +a + +b; }, 0);
var sumFwd = fwd.reduce(function (a, b) { return +a + +b; }, 0);
var trueLocation = +sumDepth * +sumFwd;
console.log(depth);
console.log(fwd);
console.log(trueLocation);
