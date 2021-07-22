var isCloudy = true;
var temperature = 65;
var isRaining = false;
var whatToBring = "I should bring";

if(isCloudy){
    whatToBring += "cloudglasses";
}
if(temperature>60){
    whatToBring += "shorts";
}
if(isRaining){
    whatToBring += "umbrella";
}
console.log(whatToBring);



var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    for(var i=0; i<numbers.length; i++){
        if(numbers[i]>0){
            countPositives++
        }
    }




// your code here!
    
console.log("there are " + countPositives + " positive values");

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
for(var i=0; i<numbers.length; i++){
    if(numbers[i]>0){
        countPositives += 1;

    }
}
console.log("there are" + countPositives +"positive values");

