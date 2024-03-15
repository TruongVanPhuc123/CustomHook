import React from 'react'
import Name from './components/Name';
import Language from './components/Language';
import Display from './components/Display';
import useLocalStorage from './hooks/useLocalStorage';
import useCounter from './hooks/useCounter';

function App() {

  const [name, setName] = useLocalStorage('name')
  const [language, setLanguage] = useLocalStorage('language')
  const [count, increment, uncrement] = useCounter('count', 0)
  return (
    <div >
      <Name name={name} setName={setName} />
      <Language language={language} setLanguage={setLanguage} />
      <Display name={name} language={language} />

      <button onClick={uncrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
