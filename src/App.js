
import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
import Information from './components/Information';
import Footer from "./components/Footer"
function App() {
  return (
    <div className="px-4">
    <Header/>
    <Card/>
    <Information/>
    <Footer/>
    </div>
  );
}

export default App;
