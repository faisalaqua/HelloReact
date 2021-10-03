import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import MemoriesList from "./components/MemoryList";

function App() {
  return (
    <div className="App">
      <Home />
      <MemoriesList />
    </div>
  );
}

export default App;
