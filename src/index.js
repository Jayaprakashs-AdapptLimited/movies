import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import StarRating from './StarRating';
// import App from './App-TextExpander'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <App /> */}
    {/* <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Ok', 'Good', 'Amazing']} /> */}

    {/* <StarRating maxRating={5} /> */}
  </React.StrictMode>
);


