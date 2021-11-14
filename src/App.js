/** @jsxImportSource theme-ui */ //enables us to start using the sx prop
import { useColorMode } from 'theme-ui';
import { useMediaQuery } from 'react-responsive';

import logo from './logo.svg';
import './App.css';

function App() {
  const [colorMode, setColorMode] = useColorMode();

  useMediaQuery({
    query: '(prefers-color-scheme: dark)', //this is a boolean
  }, undefined, (isDarkPreferred) => setColorMode(isDarkPreferred ? 'dark' : 'light')) //isDarkPreferred is a boolean

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Theme UI Playground
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          sx={{fontWeight: 'bold', color: 'primary'}}
        >Link</a>

        <br />

        <button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')} sx={{bg: 'primary', color: 'inverseText'}}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</button>
      </header>
    </div>
  );
}

export default App;
