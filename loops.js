console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19");
var counter = -10;

while(counter < 20){
	console.log(counter);
	counter++;
}
	
	console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 AND 40");
var counter = 10;

while(counter <=40){
	console.log(counter);
	counter+=2;
}

console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333");
var counter = 300;

while(counter <= 333){
	if(counter % 2 !== 0){
		console.log(counter);
	}
	counter+=1;
}