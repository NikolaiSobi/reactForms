import { useState } from 'react';
import './App.css';
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';

const INITAL_STATE = [
  {id: 1, color: "blue", width: 100, height: 300},
  {id: 2, color: "red", width: 100, height: 200}
]


function App() {
  const [boxes, setBoxes] = useState(INITAL_STATE)

  const addBoxes = (val) => setBoxes([...boxes, val])

  const deleteBox = (id) => {
    const newBoxList = boxes.filter((box) => box.id !== id)
    setBoxes(newBoxList)
  }
  return (
    <div className="App">
      <BoxList  boxes={boxes} deleteBox={deleteBox} />
      <NewBoxForm boxHandle={addBoxes} boxes={boxes} />
    </div>
  );
}

export default App;
