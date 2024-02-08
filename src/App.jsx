import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom'
import Layout from './layouts/Layout'

// Page Components
import Error from './components/Error'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
          errorElement={<Error />}
        >
          <Route
            index
            element={<Home />}
            errorElement={<Error />}
          />
          <Route
            path='/about'
            element={<About />}
            errorElement={<Error />}
          />
          <Route
            path='/portfolio'
            element={<Portfolio />}
            errorElement={<Error />}
          />
          <Route
            path='/contact'
            element={<Contact />}
            errorElement={<Error />}
          />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
