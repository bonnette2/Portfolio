import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Contacts from './components/contacts';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <main>
        <Home /> 
        <About />   
        <Services /> 
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App
