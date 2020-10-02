function Rectangle(a, b) {
  
  if(isNaN(a) || isNaN(b))
    throw new Error("Invalid Inputs")
  
  this.length = a;
  this.width = b;
  this.area = a * b;
  this.perimeter = 2 * (a + b);
    
}
