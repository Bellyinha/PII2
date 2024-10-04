import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Perfil from './components/Perfil'
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Perfil />
      <Create />
      <Read />
      <Update />
      <Delete />
    </div>
  );
}

export default App;
