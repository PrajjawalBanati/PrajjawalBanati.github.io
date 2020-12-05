export function getInsertionSortAnimation(array)
{
    let animations=[];
    let auxilliaryarray=[];
    auxilliaryarray=array.slice();
    InsertionSort(auxilliaryarray,animations);
    array=auxilliaryarray;
    return [animations,array];
}
function InsertionSort(auxilliaryarray,animations)
{
    for(let i=1;i<auxilliaryarray.length;i++)
    {
        let key=auxilliaryarray[i];
        let j=i-1;
        animations.push(["comparison1",i,j]);
        animations.push(["comparison2",i,j]);
        while(j>=0 && auxilliaryarray[j]>key)
        {
            animations.push(["comparison1",i,j]);
            animations.push(["comparison2",i, j]);
            auxilliaryarray[j+1]=auxilliaryarray[j];
            animations.push(["swap",j+1,auxilliaryarray[j]]);
            j--;
        }
        animations.push(["swap",j+1,key]);
        auxilliaryarray[j+1]=key;
    }
}