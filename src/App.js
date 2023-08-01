import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');

  const newButton = buttonColor === 'red' ? 'blue' : 'red';

  const onClickElement = () => {
    setButtonColor(newButton);
  };
  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={onClickElement}>
        Change to {newButton}
      </button>
    </div>
  );
}

export default App;
