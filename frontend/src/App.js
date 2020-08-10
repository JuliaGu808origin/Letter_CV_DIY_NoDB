import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateLetter from './components/letterDIY/LetterCreateRedux';
import PreviewLetter from './components/letterDIY/PreviewLetterRedux';
import HomePage from './components/home/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route path="/CreateLetter" component={CreateLetter}/>
      <Route path="/PreviewLetter" component={PreviewLetter} />
    </BrowserRouter>

  );
}

export default App;
