
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Page/Share/Header/Header';
import Home from './component/Page/Home/Home/Home';
import Login from './component/Page/Login/Login/Login';
import Register from './component/Page/Login/Register/Register';
import CheckOut from './component/Page/CheckOut/CheckOut';
import NotFound from './component/Page/NotFound/NotFound';
import Booking from './component/Page/Login/Booking/Booking';
import RequireAuth from './component/Page/Login/RequireAuth/RequireAuth';





function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/services/:servicesId' element={<CheckOut></CheckOut>}></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/booking' element={ 
          <RequireAuth>
            <Booking></Booking>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
