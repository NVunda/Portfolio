import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './Components/Contacts';
import CollectionDivers from './Components/CollectionDivers';
import CollectionFilm from './Components/CollectionFilm';
import CollectionMariage from './Components/CollectionMariage';
import HomePage from './Components/Homepage';
import Navbar from './Components//Navbar';


const App = () => {

    return (
        <Router> 
          <Navbar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/CollectionFilm" element={<CollectionFilm />} />
              <Route path="/CollectionMariage" element={<CollectionMariage />} />
                <Route path="/CollectionDivers" element={<CollectionDivers />} />
                <Route path="/Contacts" element={<Contacts />} />
          </Routes>
    </Router>
  )
}

export default App
