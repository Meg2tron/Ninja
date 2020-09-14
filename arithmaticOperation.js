/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width){
    if(length===undefined || width===undefined || isNaN(length) || isNaN(width) || typeof(length)=== "string" || typeof(width)=== "string")
        throw (new Error('Provide valid inputs'))
    return length*width;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    if(length===undefined || width===undefined || isNaN(length) || isNaN(width) || typeof(length)=== "string" || typeof(width)=== "string")
        throw (new Error('Provide valid inputs'))
    return 2*(length+width);
}
