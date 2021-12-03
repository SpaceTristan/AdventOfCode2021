
//PART 1

//Read and process directions
import * as fs from 'fs';

var text = fs.readFileSync("./data.txt").toString("utf-8");
var directions = text.split("\n");

//Map direction 
//forward increases by x units
//down = -y vs up = +y
let up: [number] = [0];
let down: [number] = [0];
let forward: [number] = [0];

for (var direction of directions)
{
    var splitVal = direction.split(" ", 2)

    if (splitVal[0] == 'up')
    {
        up.push(Number(splitVal[1]))
    }
    else if (splitVal[0] == 'down')
    {
        down.push(Number(splitVal[1]))
    }
    else if (splitVal[0] == 'forward')
    {
        forward.push(Number(splitVal[1]))
    }

}

let sumUp: Number = up.reduce((a, b) => a + b, 0);
let sumDown: Number = down.reduce((a, b) => a + b, 0);
let sumForward: Number = forward.reduce((a, b) => a + b, 0);

let finalResult: number = (+sumDown - +sumUp) * +sumForward;

console.log(finalResult);


//PART 2

let aim: Number = 0;
let depth: [Number] = [0];
let fwd: [Number] = [0];

for (var direction of directions)
{
    var splitVal = direction.split(" ", 2)

    if (splitVal[0] == 'up')
    { 
        //If up decrease aim by x amount
        aim = +aim - Number(splitVal[1])
    }
    else if (splitVal[0] == 'down')
    {
        //If down increase aim by x amount
        aim = +aim + Number(splitVal[1])
    }
    else if (splitVal[0] == 'forward')
    {
        //Move forward x and depth = x * 
        let fwdVal: Number = Number(splitVal[1]);
        fwd.push(fwdVal);
        let depthVal: Number = +fwdVal * +aim
        depth.push(depthVal);
    }
}

let sumDepth: Number = depth.reduce((a, b) => +a + +b, 0);
let sumFwd: Number = fwd.reduce((a, b) => +a + +b, 0);

let trueLocation: number = +sumDepth * +sumFwd;

console.log(trueLocation);
