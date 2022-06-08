import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
// import TopNavBar from './components/TopNavbar/TopNavBar';

function App() {
  return (
    <>
    {/* <TopNavBar/> */}
    <BrowserRouter>
      <Routes>
          <Route exact path="/"  element={<HomePage />} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
