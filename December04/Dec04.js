"use strict";
exports.__esModule = true;
var fs = require("fs");
var text = fs.readFileSync("./data.txt").toString("utf-8");
var lines = text.split("\n");
//Create a logical map with input data
//List entry
var entries = lines[0].replace('\r', '').split(',');
//console.log(lines);
var bingoBoards = [];
for (var i = 1; i < lines.length; i++) {
    var temp = lines[i].replace(/[\s,]+/g, ',').split(",").map(function (item) { return item.trim(); }), final = temp.filter(function (e) { return e; });
    bingoBoards.push(final);
}
var allBoards = groupArr(bingoBoards.filter(function (e) { return e.length; }), 5);
var round = 1;
var completedNumbers = [];
var index;
while (round <= (entries.length / 5)) {
    for (var i = 0; i < 5; i++) {
        console.log(entries[i]);
        allBoards.forEach(function (arr) {
            arr.forEach(function (row) {
                row.forEach(function (val) {
                    if (val === entries[i]) {
                        index = row.indexOf(val);
                        if (~index) {
                            row[index] = 'x';
                        }
                    }
                });
            });
        });
        entries.splice(i, 0);
    }
    round++;
}
console.log(allBoards);
function groupArr(data, n) {
    var group = [];
    for (var i = 0, j = 0; i < data.length; i++) {
        if (i >= n && i % n === 0)
            j++;
        group[j] = group[j] || [];
        group[j].push(data[i]);
    }
    return group;
}
//Check every 5 numbers in entry
// for (var i = 0; i < entries.length; i++){
//     console.log(+entries[i]);
// }
//every number will highlight a space on the board (maybe a binary map?)
//First to reach 5 in a row wins
