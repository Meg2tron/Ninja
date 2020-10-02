function reverseString(s) {

  if (typeof s !== 'string' || s instanceof String)
        throw (new Error('Provide valid inputs'))

  try{
    console.log(s.split("").reverse().join("")) 
  }
  catch(e){
    console.log(e.message); 
    console.log(s);
  }   
}
