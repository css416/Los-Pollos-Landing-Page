import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// import pages
import Home from './pages/Home.js';
import AddReview from './AddReview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-review" element={<AddReview />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
