
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home01 from './components/home01';
import OtpPage from './components/OtpPage';
import Form01 from './components/Form01';
import Form from './components/Form';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home01 />} />
          <Route exact path="/otp" element={<OtpPage />} />
          <Route exact path="/form1" element={<Form01 />} />
          <Route exact path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
