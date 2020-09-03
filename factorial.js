function factorial(n)
{
    if (isNaN(n) || n === undefined)
        throw (new Error("Provide input as number"))
    if (n==1)
    return 1;

    return n*factorial(n-1);
}
