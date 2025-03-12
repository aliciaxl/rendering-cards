import './App.css';
import data from "./data";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <body>
        <Card info={data}/>
      </body>
    </div>
  );
}


export default App;