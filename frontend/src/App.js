import logo from './logo.svg';
import './App.css';

function test() {
  console.log("fetch start")
  fetch("https://6af1820c-d6d6-4297-8de9-7a778ccb5ce2-8080.apps.codespaces.githubusercontent.com/test", {credentials: 'include'})
    .then(data=>data.json().then(console.log))
    .catch(err=>console.error(err));
    console.log("fetch done")
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>test()}>Test</button>
      </header>
    </div>
  );
}

export default App;
