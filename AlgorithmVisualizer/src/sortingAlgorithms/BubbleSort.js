export function getbubblesortanimation(array)
{
    let animation=[];
    let auxillaryarray=array.slice();
    bubblesort(auxillaryarray,animation);
    array = auxillaryarray;
    return [animation,array];
}
function bubblesort(auxillaryarray,animation)
{
    const length = auxillaryarray.length;
    let iterator = length-1;
    while(iterator > 0)
    {
        let swapped = false;
        for(let i = 0;i < iterator; i++)
        {
            animation.push(["comparison1",i,i+1]);
            animation.push(["comparison2",i,i+1]);
            if(auxillaryarray[i] > auxillaryarray[i+1])
            {
                swapped = true;
                animation.push(["swap",i,auxillaryarray[i+1]]);
                animation.push(["swap",i+1,auxillaryarray[i]]);
                let temp = auxillaryarray[i];
                auxillaryarray[i] = auxillaryarray[i+1];
                auxillaryarray[i+1] = temp;
            }
        }
        if(swapped === false) break;
        iterator--;
    }
}