import './App.css';
import Logo from './componentes/Logo'
import OpcoesHeader from './componentes/Logo/OpcoesHeader';
import IconesHeader from './componentes/IconesHeader';


function App() {
  return (
    <div className='App'>
      <header className='App__header'>
        <Logo />
        <OpcoesHeader />
        <IconesHeader />
      </header>
    </div>
  );
}

export default App;
