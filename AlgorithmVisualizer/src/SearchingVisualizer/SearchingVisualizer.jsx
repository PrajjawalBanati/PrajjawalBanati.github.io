import React from 'react';
import './styles.css';
import { getLinearSearchAnimations } from '../searchingAlgorithms/LinearSearch';
import { getBinarySearchAnimations } from '../searchingAlgorithms/BinarySearch';
// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 50;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'orange';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

const FOUND_COLOR = 'green'

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super (props);
        this.state = {
            array: [],
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.resetArray();
    }
    handleChange(event)
    {
        this.setState({value: event.target.value});
    }
    resetArray(){
        const array = [];
        for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++)
        {
            array.push(randomIntFromInterval(5,730));
        }
        array.sort((a,b)=>a - b);
        this.setState({array});
    }
    LinearSearch()
    {
        if(this.state.value.length>0)
        {

            let element=parseInt(this.state.value);
            const animations=getLinearSearchAnimations(this.state.array,element);
            for(let i=0;i<animations.length;i++)
            {
                const iscolorchange = animations[i][0] === "iteration1" || animations[i][0] === "iteration2";
                const arrayboxes = document.getElementsByClassName('array-bar-2');
                if(iscolorchange===true)
                {
                    const color = (animations[i][0] === "iteration1") ? SECONDARY_COLOR:PRIMARY_COLOR;
                    const barindex=animations[i][1];
                    const FirstBarStyle=arrayboxes[barindex].style;
                    setTimeout(()=>{
                        FirstBarStyle.backgroundColor=color;
                    },i*ANIMATION_SPEED_MS);
                }
                else if(animations[i][0]==="found") {
                    const barFoundIndex=animations[i][1];
                    const barstyle=arrayboxes[barFoundIndex].style;
                    setTimeout(()=>{
                        barstyle.backgroundColor=FOUND_COLOR;
                    },i*ANIMATION_SPEED_MS);
                    setTimeout(()=>{
                        barstyle.backgroundColor=PRIMARY_COLOR;
                    },(animations.length+50)*ANIMATION_SPEED_MS);
                }
                else {
                    setTimeout(()=>{
                        alert("Element Not Found");
                    },i*ANIMATION_SPEED_MS);
                }
            }
        }
        else{
            alert("Enter the number to search");
        }
        
    }
    BinarySearch()
    {
        if(this.state.value>0)
        {
            let element=parseInt(this.state.value);
            const animations=getBinarySearchAnimations(this.state.array,element);
            for(let i=0;i<animations.length;i++)
            {
                const iscolorchange = animations[i][0] === "iteration1" || animations[i][0] === "iteration2";
                const arrayboxes = document.getElementsByClassName('array-bar-2');
                if(iscolorchange===true)
                {
                    const color = (animations[i][0] === "iteration1") ? SECONDARY_COLOR:PRIMARY_COLOR;
                    const onebarindex=animations[i][1];
                    const secondbarindex=animations[i][2];
                    const FirstBarStyle=arrayboxes[onebarindex].style;
                    const SecondBarStyle=arrayboxes[secondbarindex].style;
                    setTimeout(()=>{
                        FirstBarStyle.backgroundColor=color;
                        SecondBarStyle.backgroundColor=color;
                    },i*ANIMATION_SPEED_MS);
                }
                else if(animations[i][0]==="found")
                {
                    const barFoundIndex=animations[i][1];
                    const barstyle=arrayboxes[barFoundIndex].style;
                    setTimeout(()=>{
                        barstyle.backgroundColor=FOUND_COLOR;
                    },i*ANIMATION_SPEED_MS);
                    setTimeout(()=>{
                        barstyle.backgroundColor=PRIMARY_COLOR;
                    },(animations.length+50)*ANIMATION_SPEED_MS);
                }
                else{
                    setTimeout(()=>{
                        alert("Element Not Found");
                    },i*ANIMATION_SPEED_MS);
                    
                }
            }
        } 
        else{
            alert("Enter the number to search");
        }       
    }
    JumpSearch()
    {
        let element=parseInt(this.state.value);
        
    }
    ExponentialSearch()
    {
        let element = parseInt(this.state.value);
        
    }

    render(){
        const {array} = this.state;
        return (<div>
        <div className = "App-header-2">
        <div className = "heading">
        <h2>Searching Visualizer</h2>
        </div>
        <div className = "inputnumber"> <input type="text" name="name" className="element-input" onChange={this.handleChange} placeholder="" autoComplete="off"/>
        <label for="name" className="element-label">Number</label>
        </div>
        <div className = "button" onClick={() => this.resetArray()}> Generate an Array </div>
        <div className = "button" onClick={() => this.LinearSearch()}> Linear Search </div>
        <div className = "button" onClick={() => this.BinarySearch()}> Binary Search </div>
        </div>
        <div className ="array-container-2">
            {array.map((value,idx) => (
                <div
                className = "array-bar-2"
                key = {idx}
                style = {{
                    backgroundColor:PRIMARY_COLOR,
                }}>
                    {value}
                </div>
            ))
            }
        </div>
        <div className="footer-2">
      </div>
        </div>);
    }
}
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }