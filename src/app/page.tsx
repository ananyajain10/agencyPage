'use client'

import { Provider } from 'react-redux'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import store from './redux/store';
import SignUp from '../../pages/Signup'
import Login from '../../pages/login'
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';

 function Home() {
  return (
    <div className=" bg-black text-white w-screen">
      <main className="">
      <Provider store={store}>
        <Navbar/>
        <Hero/>
        <About/>
        <Testimonial/>
        <Footer/>
      </Provider>
      </main>
    </div>
  );
}

// const App = () => {

//   return (
//     <>
//      
//      <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/sign_up" element={<SignUp />} />
//         <Route path="/login" element={ <Login />} />
//       </Routes>
//     </Router>
//     </Provider>
//     </>

//   )
// }

// export default App;

export default Home; 
