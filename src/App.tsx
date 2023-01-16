import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import ProductSelection from './pages/ProductSelection/ProductSelection';
import Page404 from './pages/Page404/page404';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductSelection />}></Route>
        <Route path='/404' element={<Page404 />}></Route>
        <Route path='*' element={<Page404 />}></Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;
