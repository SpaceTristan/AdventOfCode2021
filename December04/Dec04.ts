import * as fs from "fs";

var text = fs.readFileSync("./data.txt").toString("utf-8");
var lines = text.split("\n")

//Create a logical map with input data

//List entry
var entries: string[] = lines[0].replace('\r','').split(',');

//console.log(lines);
var bingoBoards: string[][] = [];
for (var i = 1; i < lines.length; i++) {
        var temp: string[] = lines[i].replace(/[\s,]+/g, ',').split(",").map((item)=>item.trim()),
        final: string[] = temp.filter(e => e);
        bingoBoards.push(final);
}
var allBoards = groupArr(bingoBoards.filter(e => e.length), 5);

var round: number = 1;
var completedNumbers: string[] = [];

var index: number;
while(round <= (entries.length/5)){
    for(var i = 0; i < 5; i++)
    {
        console.log(entries[i])
        allBoards.forEach(function(arr) {
            arr.forEach(function(row) {
                row.forEach(function(val){
                    if(val === entries[i]){
                        index = row.indexOf(val);
                        if (~index) {
                            row[index] = 'x';
                        }
                    }
                })
            });
            
        });
        entries.splice(i,0);
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
        group[j].push(data[i])
    }
    return group;
}


//Check every 5 numbers in entry
// for (var i = 0; i < entries.length; i++){
//     console.log(+entries[i]);
// }

//every number will highlight a space on the board (maybe a binary map?)
//First to reach 5 in a row wins