function sum(arr){
	var sum = 0;
	for (var i=2; i<arr.length; i++){
		sum+=Number(arr[i]);
	}
	return sum;
}
console.log(sum(process.argv));