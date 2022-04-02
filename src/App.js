import './App.css';
import Heart from './components/Heart';
import Header from './components/Header';

const message = 'cool cud';


function App() {
  return (
    <>
      <Header />
      <Heart msg={message} />
    </>
  );
}

export default App;
