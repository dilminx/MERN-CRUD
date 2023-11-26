import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import React  from 'react';
import Home from './component/home';
import Read from './component/Read';
import Update from './component/Update';
import Delete from './component/Delete';
import Create from './component/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './navbar/Search';


function App() {
  


  return (

<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/create' element={<Create/>}></Route>
  <Route path='/read/:id' element={<Read/>}></Route>
  <Route path='/update/:id' element={<Update/>}></Route>
  <Route path='/delete/:id' element={<Delete/>}></Route>

</Routes>

  )
}

export default App
