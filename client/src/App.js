import Header from './Components/Header'
import Login from './Components/Login'
import Register from './Components/Register'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard';

function App() {
  
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />

        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
