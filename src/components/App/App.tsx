import { Route, Routes } from 'react-router-dom';

import HomePage from '../../Pages/HomePage/HomePage';
import Header from '../Header/Header';
import ProductsPage from '../../Pages/ProductsPage/ProductsPage';
import ContactsPage from '../../Pages/ContactsPage/ContactsPage';
import Footer from '../Footer/Footer';
import { MyContext, storeData } from '../../Store/Store';
import './App.css';

function App() {
  return (
    <MyContext.Provider value={storeData}>
      <div className="App">
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
