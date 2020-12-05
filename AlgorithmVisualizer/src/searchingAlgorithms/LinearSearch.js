export function getLinearSearchAnimations(array,number)
{
    let animations=[];
    animations=LinearSearch(array,number,animations);
    return animations;
}
function LinearSearch(array, number,animations)
{
    for(let i=0;i<array.length;i++)
    {
        animations.push(["iteration1",i]);
        animations.push(["iteration2",i]);
        if(array[i]===number)
        {
            animations.push(["found",i])
            return animations;
        }
    }
    animations.push(["notfound",-1]);
    return animations;
}