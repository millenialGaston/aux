let width = 20;
let height = 20;
let entrypoint = function(){
	var initPercentage = 25;
	return initPercentage;
};

let initialize = function(initPercentage){
	let total = width*height;
	numberCellsInit = Math.floor(initPercentage*total);
	let arr = [];
	while(arr.length < numberCellsInit){
    		let r = Math.floor(Math.random() * numberCellsInit) + 1;
    		if(arr.indexOf(r) === -1) arr.push(r);
	}
};


