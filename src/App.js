import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Error404 from './pages/Error404'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='services' element={<Services />} />
          <Route path='about-us' element={<About />} />
          <Route path='contact-us' element={<Contact />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
