function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    let re = new RegExp('^(Mr|Ms|Mrs|Dr|Er)(\\.)([a-zA-Z])+$')
    
    return re;
}