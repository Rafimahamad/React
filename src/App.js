import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Components/Home';
import Login from './Pages/Login';
import ProtectedRoute from './Security/ProtectedRoute';
import Dashboard from './Pages/Dashboard';
import BillPayment from './Pages/BillPayment';
import History from './Pages/History';
import View from './Pages/View';
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';
import Help from './Pages/Help';
import PageNotFound from './Pages/PageNotFound';
import { ToastContainer } from 'react-toastify';
import UsersList from './Pages/Admin/UsersList';
import GenerateBill from './Pages/Admin/GenerateBill';
import 'react-toastify/dist/ReactToastify.css';
import DueBills from './Pages/DueBills';
import Complaints from './Pages/Admin/Complaints';
import AboutUs from './Pages/AboutUs';
import AdminRoutes from './Security/AdminRoutes';
import ForgotPassword from './Pages/ForgotPassword';


// import 'font-awesome/css/font-awesome.min.css';



function App() {



  return (

    <div>

      <ToastContainer position='top-center' />
      <Router>

        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/login' element={<Login />} exact />
          <Route path='/signup' element={<Signup />} exact />
          <Route path='/forgot' element={<ForgotPassword />} exact />
          <Route path='/auth' element={<ProtectedRoute />}>
            <Route path='dashboard' element={<Dashboard />} >

              <Route path='view' element={<View />} />
              <Route path='profile' element={<Profile />} />
              <Route path='editProfile' element={<EditProfile />} />
              <Route path='duebills' element={<DueBills />} />
              <Route path='paybill/:id' element={<BillPayment />} />
              <Route path='history' element={<History />} />
              <Route path='help' element={<Help />} />
              <Route path='about' element={<AboutUs />} />

             <Route path='' element={<AdminRoutes/>} >
                <Route path='usersList' element={<UsersList />} />
             
                <Route path='generateBill/:email' element={<GenerateBill />} />
         
                <Route path='complaints' element={<Complaints />} />
              
                </Route>

            </Route>


          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>

      </Router>

    </div>

  );
}

export default App;
