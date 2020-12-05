export function getSelectionSortAnimation(array)
{
    let animations=[];
    let auxillaryarray=array.slice();
    console.log(array)
    SelectionSort(auxillaryarray,animations);
    array=auxillaryarray;
    console.log(auxillaryarray);
    return [animations,array];
}
function SelectionSort(auxillaryarray,animations)
{
    for(let i=0;i<auxillaryarray.length;i++)
    {
        let element=auxillaryarray[i];
        let min_idx=i;
        for(let j=i+1;j<auxillaryarray.length;j++)
        {
            animations.push(["comparison1",min_idx,j]);
            animations.push(["comparison2",min_idx,j]);
            if(auxillaryarray[min_idx] > auxillaryarray[j])
            {
                min_idx=j;
            }
        }
        animations.push(["swap",min_idx,auxillaryarray[i]]);
        animations.push(["swap",i,auxillaryarray[min_idx]]);
        let temp=auxillaryarray[min_idx];
        auxillaryarray[min_idx]=auxillaryarray[i];
        auxillaryarray[i]=temp;
    }
}