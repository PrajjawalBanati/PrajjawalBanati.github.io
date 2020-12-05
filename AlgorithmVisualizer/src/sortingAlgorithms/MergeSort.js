export function getMergeSortAnimation(array)
{
  let animation=[];
  let auxillaryarray=array.slice();
  mergeSort(auxillaryarray,0,auxillaryarray.length-1,animation);
  return [animation,array];
}
function mergeSort (unsortedArray,forwardindex,endingindex,animation) {
  if(forwardindex==endingindex)
  {
    return;
  }
  let middleindex=Math.floor((forwardindex+endingindex)/2);
  mergeSort(unsortedArray,forwardindex,middleindex,animation);
  mergeSort(unsortedArray,middleindex+1,endingindex,animation);
  merge(unsortedArray,forwardindex,middleindex,endingindex,animation);
}
function merge(unsortedArray,startindex,middleindex,endingindex,animation)
{
  let SortedArray=[];
  let i=startindex;
  let j=middleindex+1;
  while(i<=middleindex && j <= endingindex)
  {
    animation.push(["comparison1",i,j]);
    animation.push(["comparison2",i,j]);
    if(unsortedArray[i]<=unsortedArray[j])
    {
      SortedArray.push(unsortedArray[i++]);
    }
    else {
      SortedArray.push(unsortedArray[j++]);
    }
  }
  while (i<=middleindex)
  {
    animation.push(["comparison1",i,i]);
    animation.push(["comparison2",i,i]);
    SortedArray.push(unsortedArray[i++]);
  }
  while(j<=endingindex)
  {
    animation.push(["comparison1",j,j]);
    animation.push(["comparison2",j,j]);
    SortedArray.push(unsortedArray[j++]);
  }
  for(let i=startindex;i<=endingindex;i++)
  {
    animation.push(["comparison1",i,i-startindex])
    animation.push(["swap",i,SortedArray[i-startindex]]);
    animation.push(["comparison2",i,i-startindex]);
    unsortedArray[i]=SortedArray[i-startindex];
  }
}