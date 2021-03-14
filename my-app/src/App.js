import logo from './logo.svg';
import './App.css';

// import Mycss.module.css file here
// we have to provide a name for that module "style"
import style from './Mycss.module.css'

// import SASS file first
import './MySASS.scss'

function App() {
  // Example of use css as javascript Object

  // const TextStyle={
  //   border: "1px solid blue",
  //   backgroundColor: "green",
  //   color: "red",
  //   margin: "40px",
  //   padding: "30px"
  // }

  return (
    <div className="App">
      {/* inline css example */}
      <h1 style={{color: "blue", backgroundColor: "gray"}}>Fardin Parvez</h1>

      {/* using css from app.css example */}
      <h1 className="textStyle">Asiul Bari</h1>

      {/* using css from Mycss.module.css example */}
      {/* first create Mycss.module.css */}
      {/* import that module  */}
      <h1 className={style.textStyle}>Boraida Rahman</h1>

      {/* SASS example */}
      {/* first run command "npm install node-sass" */}
      <h1 className="textStylesass">Pavel Parves Prince</h1>
    </div>
  );
}

export default App;
