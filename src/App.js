import AllBLOGS from './allBlogs';
import './App.css';
import Nav from './navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Addblog from './create';
import BlogDetails from './blogDetails';

function App() {
  return (
    <Router>
    <div className="app">
    <Nav />
    <Routes>
      <Route exact path="/" element={<AllBLOGS />} />
      <Route exact path="/add-blog" element={<Addblog />} />
      <Route exact path="/blog/:id" element={<BlogDetails />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
