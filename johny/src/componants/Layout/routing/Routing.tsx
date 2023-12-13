
import {Routes,Route} from 'react-router-dom'
import Home from '../../home/Home';
import About from '../../about/About';
import Product from '../../products/Products';
function Routing() {
    return (<>
    
    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/product' element={<Product/>}/>



    </Routes>
    
    </>  );
}

export default Routing;