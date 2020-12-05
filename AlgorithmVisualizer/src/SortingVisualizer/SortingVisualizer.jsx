import React from 'react';
import {getbubblesortanimation} from '../sortingAlgorithms/BubbleSort';
import {getSelectionSortAnimation} from '../sortingAlgorithms/SelectionSort';
import {getInsertionSortAnimation} from '../sortingAlgorithms/InsertionSort';
import {getMergeSortAnimation} from '../sortingAlgorithms/MergeSort';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'orange';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'black';

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super (props);
        this.state = {
            array: [],
        };
    }
    componentDidMount(){
        this.resetArray();
    }
    resetArray(){
        const array = [];
        for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++)
        {
            array.push(randomIntFromInterval(5,730));
        }
        this.setState({array});
    }
    BubbleSort()
    {
        const [animations,sortedarray] = getbubblesortanimation(this.state.array);
        for(let i=0;i<animations.length;++i)
        {
            const iscolorchange = animations[i][0] === "comparison1" || animations[i][0] === "comparison2";
            // console.log(iscolorchange);
            const arraybars = document.getElementsByClassName('array-bar');
            if(iscolorchange === true)
            {
                const color = (animations[i][0] === "comparison1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                // console.log(color);
                const [comparison,barOneIndex,barTwoIndex] = animations[i];
                const FirstBarStyle = arraybars[barOneIndex].style;
                const SecondBarStyle = arraybars[barTwoIndex].style;
                setTimeout(() => {
                    FirstBarStyle.backgroundColor = color;
                    SecondBarStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [swap, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arraybars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS); 
            }
        }
    }
    SelectionSort()
    {
        const[animations,sortedarray]=getSelectionSortAnimation(this.state.array);
        // console.log(sortedarray);
        for(let i=0;i<animations.length;++i)
        {
            const iscolorchange = animations[i][0] === "comparison1" || animations[i][0] === "comparison2";
            // console.log(iscolorchange);
            const arraybars = document.getElementsByClassName('array-bar');
            if(iscolorchange === true)
            {
                const color = (animations[i][0] === "comparison1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                // console.log(color);
                const [comparison,barOneIndex,barTwoIndex] = animations[i];
                const FirstBarStyle = arraybars[barOneIndex].style;
                const SecondBarStyle = arraybars[barTwoIndex].style;
                setTimeout(() => {
                    FirstBarStyle.backgroundColor = color;
                    SecondBarStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [swap, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arraybars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS); 
            }
        }
    }
    InsertionSort()
    {
        const[animations,sortedarray]=getInsertionSortAnimation(this.state.array);
        // console.log(sortedarray);
        for(let i=0;i<animations.length;++i)
        {
            const iscolorchange = animations[i][0] === "comparison1" || animations[i][0] === "comparison2";
            // console.log(iscolorchange);
            const arraybars = document.getElementsByClassName('array-bar');
            if(iscolorchange === true)
            {
                const color = (animations[i][0] === "comparison1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                // console.log(color);
                const [comparison,barOneIndex,barTwoIndex] = animations[i];
                const FirstBarStyle = arraybars[barOneIndex].style;
                const SecondBarStyle = arraybars[barTwoIndex].style;
                setTimeout(() => {
                    FirstBarStyle.backgroundColor = color;
                    SecondBarStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [swap, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arraybars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS); 
            }
        }
    }
    
    MergeSort()
    {
        console.log(this.state.array);
        const[animations,sortedarray]=getMergeSortAnimation(this.state.array);
        // for(let i=0;i<animations.length;i++)
        // {
        //     console.log(animations[i]);
        // }
        //console.log(sortedarray);
        for(let i=0;i<animations.length;++i)
        {
            const iscolorchange = animations[i][0] === "comparison1" || animations[i][0] === "comparison2";
            // console.log(iscolorchange);
            const arraybars = document.getElementsByClassName('array-bar');
            if(iscolorchange === true)
            {
                const color = (animations[i][0] === "comparison1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                // console.log(color);
                const [comparison,barOneIndex,barTwoIndex] = animations[i];
                const FirstBarStyle = arraybars[barOneIndex].style;
                const SecondBarStyle = arraybars[barTwoIndex].style;
                setTimeout(() => {
                    FirstBarStyle.backgroundColor = color;
                    SecondBarStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [swap, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arraybars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS); 
            }
        }
    }

    QuickSort()
    {

    }

    HeapSort()
    {
        
    }

    render(){
        const {array} = this.state;
        return (<div>
        <div className = "App-header">
        <div className = "heading">
        <h2>Sorting Visualizer</h2>
        </div>
      <div className = "button" onClick={() => this.resetArray()}> Generate an Array </div>
      <div className = "button" onClick={() => this.SelectionSort()}> Selection Sort </div>
      <div className = "button" onClick={() => this.BubbleSort()}> Bubble Sort </div>
      <div className = "button" onClick={() => this.InsertionSort()}> Insertion Sort </div>
      <div className = "button" onClick={() => this.MergeSort()}> Merge Sort </div>
      </div>
        <div className ="array-container">
            {array.map((value,idx) => (
                <div
                className = "array-bar"
                key = {idx}
                style = {{
                    backgroundColor:PRIMARY_COLOR,
                    height: `${value}px`,
                }}></div>
            ))
            }
        </div>
        <div className="footer">
      </div>
        </div>);
    }
}
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }