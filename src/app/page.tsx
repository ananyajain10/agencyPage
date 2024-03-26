'use client'

import { Provider } from 'react-redux'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import store from './redux/store';
import SignUp from './components/auth/admin/Signup'
import Login from './components/auth/admin/Login'
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';

 function Home() {
  return (
    <div className=" bg-black text-white w-screen">
      <main className=""> 
        <Navbar/>
        <Hero/>
        <About/>
        <Testimonial/>
        <Footer/>
      </main>
    </div>
  );
}

const App = () => {

  return (
    <>
     <Provider store={store}>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/login" element={ <Login />} />
      </Routes>
    </Router>
    </Provider>
    </>

  )
}

export default App;
