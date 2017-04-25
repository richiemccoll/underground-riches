import styles from "./index.css";

const App = () => console.log('App running');

document.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");
  App();
});
