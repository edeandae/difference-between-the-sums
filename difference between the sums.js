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

var integerArray=[4,5,6,49,1,45,34,56,110]

var maxDifference=0
var maxDifferenceFirstStart=0
var maxDifferenceFirstFinish=0
var maxDifferenceSecondStart=0
var maxDifferenceSecondFinish=0


function arraySum(start, finish){
	var sum=0;
	for(i=start;i<=finish;i++){
		sum=sum+integerArray[i]
	}
	return sum
}

function maxDifferenceCheck(firstStart, firstFinish, secondStart, secondFinish){
	if(Math.abs(arraySum(firstStart,firstFinish)-arraySum(secondStart,secondFinish))>maxDifference){
		maxDifference=Math.abs(arraySum(firstStart,firstFinish)-arraySum(secondStart,secondFinish))
		maxDifferenceFirstStart=firstStart
		maxDifferenceFirstFinish=firstFinish
		maxDifferenceSecondStart=secondStart
		maxDifferenceSecondFinish=secondFinish
	}

}

console.log(arraySum(0,2,integerArray))

maxDifferenceCheck(0,0,2,3)
console.log(maxDifference)
console.log(maxDifferenceFirstStart)
console.log(maxDifferenceFirstFinish)
console.log(maxDifferenceSecondStart)
console.log(maxDifferenceSecondFinish)

//console.log(Math.abs(-3))