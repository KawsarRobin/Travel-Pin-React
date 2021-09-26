import './App.css';
import Deals from './component/Deals/Deals';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App bg-light overflow-hidden">
      <Header />
      <Deals />
    </div>
  );
}

export default App;
