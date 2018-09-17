module.exports = function check(str, bracketsConfig) {
	let stack = [];
	let array = str.split('');
	stack.push(array[0]);


	for(let i = 1; i < array.length; i++) {
		stack.push(array[i]);
		for(let j = 0; j < bracketsConfig.length; j++) {
			if(array[i] == bracketsConfig[j][1] &&
			stack[stack.length - 2] == bracketsConfig[j][0]) {
				stack.pop(); stack.pop();
			}
		}
	}

	if(stack.length == 0) {
	  return true;
	} else {
	  return false;
	}
}
