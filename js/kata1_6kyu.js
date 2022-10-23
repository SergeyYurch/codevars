//You are given an array (which will have a length of at least 3, 
//but could be very large) containing integers. The array is either 
//entirely comprised of odd integers or entirely comprised of even 
//integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
function findOutlier(val){
 if ((!(val[0]%2)+!(val[1]%2)+!(val[2]%2))>1) return val.find(i=>i%2)
	return val.find(i=>!(i%2))
}

console.log(findOutlier([1,1,3, 2, 3]))