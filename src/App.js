import Game from './components/Game';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/style.css';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Game />
      <Footer />
    </div>
  );
};

export default App;
