/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon{
    nums 
    constructor(nums)
    {
        if(nums===undefined || isNaN(nums))
        throw (new Error('Provide valid inputs'))
        this.nums = nums;
    }

    perimeter(...nums)
    {
        let sum = 0;
        nums.forEach(n=>{
            if(n===undefined || isNaN(n))
        throw (new Error('Provide valid inputs'))
            sum+=n;
        })
        return sum;
    }

}