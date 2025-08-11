import './App.css';
import Header from './layout/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';

function App() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
