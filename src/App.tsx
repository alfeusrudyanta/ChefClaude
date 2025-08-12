import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>
      <BrowserRouter>
        <Header />
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
