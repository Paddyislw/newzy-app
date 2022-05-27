import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NewsCard from './components/News/NewsCard';
import NewsPage from './components/News/NewsPage';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div >
      
      <Routes>
        
        
          <Route  path='/' element={ <NewsPage category='general' key='general' />} />
  

          <Route  path='sports'element={<NewsPage category='sports' key='sports' />}/>

          <Route  path='entertainment'element={<NewsPage category='entertainment' key='entertainment' />}/>

          <Route  path='general'element={<NewsPage category='general' key='general2' />}/>

          <Route  path='health'element={ <NewsPage category='health' key='health' />}/>

          <Route  path='science'element={<NewsPage category='science' key='science' />}/>

          <Route  path='technology'element={<NewsPage category='technology' key='technology' />}/>
            
         
        
      </Routes>
    </div>
  );
}

export default App;
