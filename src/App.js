/** @jsxImportSource theme-ui */ //enables us to start using the sx prop
import { useColorMode } from 'theme-ui';
import { useMediaQuery } from 'react-responsive';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import React, { useState } from 'react';

import './App.css';

function App() {
  const [colorMode, setColorMode] = useColorMode();
  const [selectedDate, setSelectedDate] = useState(new Date());

  {/* useMediaQuery({
    query: '(prefers-color-scheme: dark)', //this is a boolean
  }, undefined, (isDarkPreferred) => setColorMode(isDarkPreferred ? 'dark' : 'light')) //isDarkPreferred is a boolean
*/}
  

  return (
      <>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <header className="App-header">
        <h1>
          Theme UI Playground
        </h1>
        <button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')} sx={{bg: 'primary', color: 'inverseText'}}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</button>
        <DatePicker format='MM/dd/yyyy' id='date-picker' label='Date Of Birth' value={selectedDate} onChange={date => setSelectedDate(date)}  />
      </header>
      <Routes>
          <Route path='/about' element={<About />} />
      </Routes>
      
    
      
    </MuiPickersUtilsProvider>
    </>
  );
}

export default App;
