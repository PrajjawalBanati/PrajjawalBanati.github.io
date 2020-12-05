export function getBinarySearchAnimations(array,number)
{
    let animations=[];
    animations=BinarySearch(0,array.length-1,array,number,animations);
    return animations;
}
function BinarySearch(starting,ending,array,number,animations)
{
    if(ending>=starting)
    {
        animations.push(["iteration1",starting,ending]);
        animations.push(["iteration2",starting,ending]);
        const midindex=Math.floor((starting+ending)/2);
        if(array[midindex]===number)
        {
            animations.push(["found",midindex,midindex]);
            return animations;
        }
        else if(array[midindex]>number)
        {
            ending=midindex-1;
            return BinarySearch(starting,ending,array,number,animations);
        }
        else if(array[midindex]<number)
        {
            starting=midindex+1;
            return BinarySearch(starting,ending,array,number, animations);
        }
    }
    else{
        animations.push(["notfound",-1,-1]);
        return animations;
    }

}