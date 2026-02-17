import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.calculator}>
      <input className={styles.display} id="display" type="text" />
      <div className="button-Container" id="buttons-container">
        <button>C</button>
      </div>
    </div>
  );
}
export default App;
