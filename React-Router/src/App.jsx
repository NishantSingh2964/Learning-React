import React from 'react'
//import Navbar from './components/Navbar.jsx'
//import Contect from './Pages/Contect.jsx'
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Products from './Pages/Products.jsx';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './Layout/RootLayout.jsx';
import ContectLayout from './Layout/ContectLayout.jsx';
import ContectInfo from './components/ContectInfo.jsx';
import ContectForm from './components/ContectForm.jsx';
import NotFound from './components/NotFound.jsx';
import JobLayout from './Layout/JobLayout.jsx';
import job from './components/job.jsx';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='about' element={<About />} />
        <Route path='contect' element={<ContectLayout />}>
          <Route path='info' element={<ContectInfo />} />
          <Route path='form' element={<ContectForm />} />
        </Route>
        <Route path='job' element= {<JobLayout />}>
         <Route index element={<job />}/>
        </Route>
        <Route path='*' element={ <NotFound />}/>
      </Route>
    )
  )

  return (
    // <div>
    //   <Navbar/>
    //   <div className='container'>
    //   <Routes>
    //     <Route path='/' element={<Home/>} />
    //     <Route path='/products' element={<Products/>} />
    //     <Route path='/about' element={<About/>} />
    //     <Route path='/contect' element={<Contect/>} />
    //   </Routes>
    //   </div>
    // </div>

    <RouterProvider router={router} />
  )
};

export default App;
