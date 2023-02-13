import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home01 from './components/home01';
import OtpPage from './components/OtpPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home01 />} />
          <Route exact path="/otp" element={<OtpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

