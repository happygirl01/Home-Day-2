function findMinMax (array){
		var i, minNum, maxNum;
		maxNum = array[0];
		minNum = array[0];

		for (i =1; i < array.length; i++) {

			if (array[i] > maxNum) {

				maxNum = array[i];
			}

			if (array[i] < minNum) {

				minNum = array[i];
			} 
		}
		if (minNum === maxNum){
			return [minNum]
		}
		else {
		  
			return [minNum, maxNum]
		}
}

module.exports = findMinMax;

