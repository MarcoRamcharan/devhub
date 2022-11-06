import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home.js'
import MainLayout from './layouts/main/MainLayout'
import UserLayout from './layouts/user/UserLayout'
import User from './pages/user/User.js'
import Features from './pages/features/Features.js'
import FeaturesLayout from './layouts/features/FeaturesLayout.js'
import Communities from './pages/communities/Communties.js'
import Community from './pages/community/Community.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}></Route>
        </Route>
        <Route path='/user/dashboard/' element={<UserLayout/>}>
          <Route index element={<User/>}></Route>
        </Route>
        <Route path='/features/' element={<FeaturesLayout/>}>
          <Route index element={<Features/>}></Route>
          <Route path='communities' element={<Communities/>}></Route>
          <Route path='communities/:name' element={<Community/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
