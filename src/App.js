/** @jsxImportSource theme-ui */ //enables us to start using the sx prop
import { useColorMode } from 'theme-ui';
import { useMediaQuery } from 'react-responsive';
import { Route, Routes } from 'react-router-dom';
import About from './About';

import './App.css';

function App() {
  const [colorMode, setColorMode] = useColorMode();

  {/* useMediaQuery({
    query: '(prefers-color-scheme: dark)', //this is a boolean
  }, undefined, (isDarkPreferred) => setColorMode(isDarkPreferred ? 'dark' : 'light')) //isDarkPreferred is a boolean
*/}
  

  return (
    <>
      <header className="App-header">
        <h1>
          Theme UI Playground
        </h1>
        <button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')} sx={{bg: 'primary', color: 'inverseText'}}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</button>
      </header>
      <Routes>
          <Route path='/about' element={<About />} />
      </Routes>
    </>
    
  );
}

export default App;
