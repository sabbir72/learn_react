import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// function Clock({locale}){
// return (
//   <h1 className='heading'>
//          <span>Hello {new Date().toLocaleTimeString(locale)}</span>
//   </h1>
// );
// }
// ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));






