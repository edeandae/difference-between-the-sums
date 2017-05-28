/*
 * the difference between the sum of the elements in the right subsequence and the sum of 
 * the elements in the left subsequence is maximum difference possible
 * from left and right sums get the right-left difference that would give the biggest difference
 * 
 */
//    0   1  2  3      4   5   6   7  8
// v: 3, -5, 1, -2,     8, -2, 3, -2, 1
//     L: -5, 1, -2   R: 8, -2, 3.

//[4,5,6,49,1,45,34,56] - [110]

var integerArray=[1,3,5,-5,-5,1,6,-10,100]

var maxDifference=0
var maxDifferenceFirstStart=0
var maxDifferenceFirstFinish=0
var maxDifferenceSecondStart=0
var maxDifferenceSecondFinish=0

//sums the given range from the global integerArray
function arraySum(start, finish){
	var sum=0;
	for(i=start;i<=finish;i++){
		sum=sum+integerArray[i]
	}
	return sum
}

//checks whener the ranges sum differences are the max so far, if so replace the global variables accordingly
function maxDifferenceCheck(firstStart, firstFinish, secondStart, secondFinish){
	if(Math.abs(arraySum(firstStart,firstFinish)-arraySum(secondStart,secondFinish))>maxDifference){
		maxDifference=Math.abs(arraySum(firstStart,firstFinish)-arraySum(secondStart,secondFinish))
		maxDifferenceFirstStart=firstStart
		maxDifferenceFirstFinish=firstFinish
		maxDifferenceSecondStart=secondStart
		maxDifferenceSecondFinish=secondFinish
	}

}

function maxDifferenceFind(){
	var firstSize=1;
	var secondSize=1;
	var size=integerArray.length;

	var firstStart=0;
	var firstFinish=0;
	var secondStart=0;
	var secondFinish=0;

	//outher loop the sizes will change, first or in an inner side the second one, later or in an outher side the first
	//inner loop only the positions will change
	//position of first will change later 
	//position of second will change first
	//check if with current size the second one fits at the left or right of the first
	//they cannot overlap

	//first start with both sizes =1 and without the first moving from its initial spot


	//must be inside other level loop
	/*
	firstFinish=firstStart+firstSize-1
	secondStart=firstFinish+1
	secondFinish=secondStart+secondSize-1
	*/

	//testing multiple first array sizes, fails as so
	//for(var i=firstSize;i<=(size-1);i++){

		//proceding to multisizes for second subArray, succesfull
		firstFinish=firstSize-1;
		for(var j=secondSize;j<=(size-firstSize);j++){		
			secondStart=firstFinish+1;
			secondFinish=secondStart+secondSize-1;

			//successfully moves and compares the second subarray with one size
			for(k=secondFinish;k<=size;k++){
				maxDifferenceCheck(firstStart,firstFinish,secondStart,secondFinish)
				secondFinish++;
				secondStart++;
				console.log("same size for both, change in position for second")
			};
			secondSize++;
			console.log("same size for 1st, different size for second")
		};
		//firstSize++;
	//}
	console.log("maxDifference ", maxDifference)
	console.log("firstStart ", maxDifferenceFirstStart)
	console.log("firstFinish ", maxDifferenceFirstFinish)
	console.log("secondStart ", maxDifferenceSecondStart)
	console.log("secondFinish ", maxDifferenceSecondFinish)
	console.log("firstSize ", firstSize)
	console.log("secondSize ", secondSize)
	console.log(size)
};

//array sum test
//console.log(arraySum(0,2,integerArray))

//maxDifferenceCheck test
/*
maxDifferenceCheck(0,0,2,3)
maxDifferenceCheck(4,4,5,8)
console.log(maxDifference)
console.log(maxDifferenceFirstStart)
console.log(maxDifferenceFirstFinish)
console.log(maxDifferenceSecondStart)
console.log(maxDifferenceSecondFinish)
*/

//console.log(Math.abs(-3))

//on to do check with all the posibilities

maxDifferenceFind()
