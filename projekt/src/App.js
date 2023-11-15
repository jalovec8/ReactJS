//import React from 'react';
//import './App.css';

//function App() {
// return (<div>


 //    <h1>Honza</h1>
 // </div>);
 
//}
//export default App;

// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('Honza');

  const changeText = () => {
    setText('Nový text!');
    setText('Ahoj');
    setText('Zdravím');
  };

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={changeText}>Změnit text</button>
    </div>
  );
}

export default App;

