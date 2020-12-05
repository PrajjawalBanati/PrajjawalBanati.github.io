import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import SearchingVisualizer from './SearchingVisualizer/SearchingVisualizer';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <SortingVisualizer></SortingVisualizer>
      </div>
      <div>
        <SearchingVisualizer></SearchingVisualizer>
      </div>
      <div>
        <PathfindingVisualizer></PathfindingVisualizer>
      </div>
    </div>
  );
}

export default App;
