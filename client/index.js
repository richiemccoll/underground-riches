import styles from "./index.css";
import React from 'react';
import ReactDOM from "react-dom";
import App from './js/components/App';

const init = () => ReactDOM.render(<App />, document.getElementById('root'));

document.addEventListener("DOMContentLoaded", event => init());
