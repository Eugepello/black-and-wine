import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<ItemListContainer bienvenida="Black and Wine" />} />
        <Route
          path='/category/:categoryName' 
          element={<ItemListContainer/>} />
        <Route
          path='/detail/:idItem'
          element={<ItemDetailContainer />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
