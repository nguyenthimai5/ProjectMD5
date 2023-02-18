import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppAdimintest from './components/admintest/AppAdimintest';
import AppUser from './components/user/AppUser';

function App() {
  return (
    <>
      <Routes>
        <Route path='/user/*' element={<AppUser />} />
        <Route path='/admintest/*' element={<AppAdimintest />} />
      </Routes>
      </>
  );
}

export default App;
