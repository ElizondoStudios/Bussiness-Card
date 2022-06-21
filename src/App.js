import Info from './Info';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

function App() {
  return (
    <div className="card">
      <div className="inner-card">
        <Info/>
        <About/>
        <Interests/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
