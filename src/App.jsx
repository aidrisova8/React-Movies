import { Route,Routes } from 'react-router-dom'
 import Home from "./components/Home/Home"
 import Header from "./components/Header/Header"
 import Footer from "./components/Footer/Footer"
 import PageNotFound from "./components/PageNotGound/PageNotFound"
 import MovieDetail from "./components/MovieDetail/MovieDetail"
 
import './App.css'

function App() {
 

  return (
    <div className='app'>
    <Header /> 
    <div className='container'>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/movie/:imbID" element={<MovieDetail />}/>
    <Route path="*"  element={<PageNotFound />}/>
   </Routes>
   </div>
   <Footer />
    </div>
  )
}

export default App
