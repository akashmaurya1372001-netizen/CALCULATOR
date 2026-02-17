import styles from "./App.module.css";
import Display from "./component/Display";
function App() {
  return (
    <div className={styles.calculator}>
     <Display></Display>
      <div className="button-Container" id="buttons-container">
        <button>C</button>
      </div>
    </div>
  );
}
export default App;
