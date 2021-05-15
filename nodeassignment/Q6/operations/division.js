exports.division = function(a,b)
{
    try {
        return (a/b);
    } catch (error) {
        return "Got the error: "+error;
    }
}