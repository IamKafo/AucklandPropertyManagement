import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Chatbot from './components/Chatbot/Chatbot';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <>
   
    <BrowserRouter>
      <Routes>
          <Route exact path="/"  element={<HomePage />} />
      </Routes>
     {/* <Chatbot/>  */}
    </BrowserRouter>
      
    </>
  );
}

export default App;
