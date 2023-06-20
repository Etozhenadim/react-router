import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {About, Home, Vans, VanDetail} from './component'
import "../server.js"
export const App=()=> {

  return (
      <BrowserRouter >
          <header>
              <Link className="site-logo" to="/">#VanLife</Link>
              <nav>
                  <Link to="/about">About</Link>
                  <Link to="/vans">Vans</Link>
              </nav>

          </header>

          <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vans" element={<Vans />} />
              <Route path="/vans/:id" element={<VanDetail />} />
          </Routes>
      </BrowserRouter>
  )
}
