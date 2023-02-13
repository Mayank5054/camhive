import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home01 from './components/home01';
import OtpPage from './components/OtpPage';
import Login from './components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home01 />} />
          <Route exact path="/otp" element={<OtpPage />}/>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

