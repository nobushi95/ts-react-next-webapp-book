import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Clock } from './components/Clock';
import { ContainerSample } from './components/ContainerSample';
import { ContextSample } from './components/ContextSample';
import { CounterUseReducer } from './components/CounterUseReducer';
import { CounterUseState } from './components/CounterUseState';
import { Hello } from './components/Hello';
import { Message } from './components/Message';
import { Name } from './components/Name';
import { ParentButtonsWithUseCallback } from './components/ParentButtonsWithUseCallback';
import { ParentMemoComponent } from './components/ParentMemoComponent';
import { UseMemoSample } from './components/UseMemoSample';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Hello />
    <Name />
    <Message />
    <ContainerSample />
    <ContextSample />
    <CounterUseState initialValue={0} />
    <CounterUseReducer initialValue={0} />
    <ParentMemoComponent />
    <ParentButtonsWithUseCallback />
    <UseMemoSample />
    <Clock />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
