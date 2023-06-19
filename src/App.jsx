import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {About, Home} from './component'

export const App=()=> {

  return (
      <BrowserRouter >
          <header>
              <Link className="site-logo" to="/">#VanLife</Link>
              <nav>
                  <Link to="/about">About</Link>
              </nav>
          </header>

          <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>
  )
}
