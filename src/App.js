import { browserRouter,Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/home/home';
import Card from './components/card/Card';
import CategoryComponent from './components/categoreComponent/CategoryComponent';
import DetalPage from './pages/DetalPage/DetallPage';
import { getCategories } from './redux/redux'
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  return (
    <brauserRouter>
      <Header />
       <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/Card' element={<Card />} />
        <Route path='/Ctegory:CategoryComponent' element={<CategoryComponent />} />
        <Route path='/Product/:id' element={<DetalPage />} />
       </Routes>
    </brauserRouter>
  );
}

export default App;
