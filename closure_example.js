// closure example

function counter(){
	let count = 0;
	return {
		increment: function(...rest){
			let increment_value = rest[0];
			if(increment_value === undefined){
				count = count++;
			}else{
				count = count+increment_value;
			}
		},
		retrieve_value: function(){
			return count;
		}
	}
}

function main(){
	let c = counter();
	console.log("Increment by Value");
	console.log("Before: " + c.retrieve_value());
	c.increment(5);
	console.log("After: " + c.retrieve_value());
	console.log("Increment");
	console.log("Before: " + c.retrieve_value());
	c.increment();
	console.log("After: " + c.retrieve_value());
}

main()