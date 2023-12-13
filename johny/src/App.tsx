import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './componants/Layout/navbar/Nav';
import Routing from './componants/Layout/routing/Routing';
import Footer from './componants/Layout/footer/Footer';

function App() {


  const [value,setValue]=useState<string>('no')

  function showItem(){
    setValue("hello")
  }
  return (
    <div className="App">

<Nav/>

<div className='content'>


<main>
  
  <Routing/>
<button onClick={showItem}>add</button>
{value}
</main>

<footer>
  
  <Footer/>

</footer>

</div>

    </div>
  );
}

export default App;
