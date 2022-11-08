import React, {useState} from 'react';

const carList = [
  {id:1, name: 'Rolls-Royce'},
  {id:2, name: 'Mercedes'},
  {id:3, name: 'Land Rover'},
  {id:4, name: 'Benley'},
  {id:5, name: 'Lexus'},
  {id:6, name: 'Audi'}
];
const colorList = [
  {id:1, name: 'Black'},
  {id:2, name: 'White'},
  {id:3, name: 'Red'},
  {id:4, name: 'Pink'},
  {id:5, name: 'Grey'},
  {id:6, name: 'Silve'}
];

function App () {
  const  [selectedCar, setSelectedCar] = useState('Rolls-Royce');
  const  [selectedColor, setSelectedColor] = useState('Black');
  
  return (
    <div className='container'>
      <h1>Seclect your car</h1>
      <lable>Select a car </lable>
      <select value={selectedCar} onChange={e => setSelectedCar(e.target.value)}>
        {carList.map(car => (
          <option key={car.id} value={car.name}>{car.name}</option>
        ))}
      </select>
      <br></br>
      <lable>Select a color </lable>
      <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)}>
        {colorList.map(color => (
          <option key={color.id} value={color.name}>{color.name}</option>
        ))}
      </select>
      <p>You selected a  {selectedColor} - {selectedCar}</p>
    </div>
  )
};

export default App;
