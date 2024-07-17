import {useContext } from 'react';
import {Routes, Route, Navigate, Link} from 'react-router-dom';
import { AuthContext } from './component/Auth/AuthContex';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import Main from './component/Main/main';
import Home from './component/Home/home';
import Admin from './component/Home/admin';

function AppRoute() {
  const {isAuthenticated} = useContext(AuthContext)
 
  return (
   <Routes>
    <Route path='/'  element={<Home/>}/>
    
    <Route path='/main'  element={<Main/>}/>

    <Route path='/register' element={ isAuthenticated? <Navigate to="/main" replace/> : <Register/> }/>

    <Route path='/login' element={ isAuthenticated? <Navigate to="/main" replace/> : <Login/> }/>
   
  </Routes>
  )
}

function App(){
  return(
    <div>
    <nav className='navbar navbar-expand-lg bg-dark'>
      <div className="container">
        <Link to="/" className='navbar-brand'>Home</Link>
        <Admin/>
      </div>
    </nav>
    <div className="container mt-5">
      <AppRoute/>
    </div>
  </div>
)
}


export default App
