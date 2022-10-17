import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarComparison from './components/CarComparison';
import CarInfo from './components/CarInfo';
import CarNews from './components/CarNews';
import Header from './components/Header';
import Home from './components/Home'
import Error404 from './components/Error404';
import Footer from './components/Footer';
import About from './components/About';
import './styles/App.css';
//the routing
function App(props) {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="latest-news" element={<CarNews />} />
        <Route path="latest-news/:carname" element={<CarNews />} />
        <Route path="car-info" element={<CarInfo />} />
        <Route path="car-info/:carname" element={<CarInfo />} />
        <Route path="car-comparison" element={<CarComparison/>} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
