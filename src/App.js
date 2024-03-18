import './App.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Reasons } from './components/Reasons';
import { MessageGenerator } from './components/MessageGenerator';
import { Footer } from './components/Footer';
import {cssVars} from './CssVars'

function App() {
  return (
    <div className="app">
      <Header/>
      <Banner/>
      <Reasons/>
      <MessageGenerator/>
      <Footer/>
      <p>{cssVars.title}</p>
    </div>
  );
}

export default App;
